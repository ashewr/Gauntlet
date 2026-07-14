import { Resend } from "resend";
import { env } from "../config/env.js";
const resend = env.RESEND_API_KEY ? new Resend(env.RESEND_API_KEY) : null;
export function emailDeliveryConfigured() {
    return Boolean(resend && env.EMAIL_FROM);
}
async function sendEmail({ toEmail, subject, text, html, }) {
    if (!resend || !env.EMAIL_FROM) {
        return { sent: false, error: "Email delivery is not configured." };
    }
    try {
        const result = await resend.emails.send({
            from: env.EMAIL_FROM,
            to: toEmail,
            subject,
            text,
            html,
        });
        if (result.error) {
            const message = typeof result.error === "object" && "message" in result.error
                ? String(result.error.message)
                : JSON.stringify(result.error);
            return { sent: false, error: message };
        }
        const id = result.data?.id || "";
        return { sent: Boolean(id), id, error: id ? undefined : "Resend did not return a message id." };
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "Unknown email delivery error.";
        console.warn(`Transactional email failed for ${toEmail}.`, error);
        return { sent: false, error: message };
    }
}
export async function sendPasswordResetEmail({ toEmail, displayName, resetUrl, }) {
    if (!resend || !env.EMAIL_FROM) {
        console.warn(`Password reset email skipped for ${toEmail}. Configure RESEND_API_KEY and EMAIL_FROM to enable delivery.`);
        console.info(`Password reset preview link for ${toEmail}: ${resetUrl}`);
        return { sent: false, previewUrl: resetUrl };
    }
    const companyName = env.COMPANY_NAME || "The Gauntlet";
    const delivery = await sendEmail({
        toEmail,
        subject: `${companyName} password reset`,
        text: [
            `Hi ${displayName},`,
            "",
            `We received a request to reset your ${companyName} password.`,
            `Use this link to choose a new password: ${resetUrl}`,
            "",
            "If you did not request this change, you can ignore this email.",
        ].join("\n"),
        html: `
      <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
        <p>Hi ${escapeHtml(displayName)},</p>
        <p>We received a request to reset your ${escapeHtml(companyName)} password.</p>
        <p>
          <a href="${escapeAttribute(resetUrl)}" style="display:inline-block;padding:12px 18px;background:#111827;color:#ffffff;text-decoration:none;border-radius:8px;">
            Reset password
          </a>
        </p>
        <p>If the button does not work, copy and paste this link into your browser:</p>
        <p><a href="${escapeAttribute(resetUrl)}">${escapeHtml(resetUrl)}</a></p>
        <p>If you did not request this change, you can ignore this email.</p>
      </div>
    `,
    });
    if (!delivery.sent) {
        console.info(`Password reset preview link for ${toEmail}: ${resetUrl}`);
    }
    return { sent: delivery.sent, previewUrl: resetUrl, error: delivery.error, id: delivery.id };
}
export async function sendWelcomeEmail({ toEmail, displayName, }) {
    const companyName = env.COMPANY_NAME || "The Gauntlet";
    const supportEmail = env.SUPPORT_EMAIL || "joingauntlet@gmail.com";
    const supportPhone = env.SUPPORT_PHONE ? ` or call ${env.SUPPORT_PHONE}` : "";
    const appUrl = env.APP_URL || "http://localhost:4000";
    return sendEmail({
        toEmail,
        subject: `Welcome to ${companyName}`,
        text: [
            `Hi ${displayName},`,
            "",
            `Welcome to ${companyName}. Your account is ready.`,
            `Sign in here: ${appUrl}/auth.html`,
            "",
            `If you need help, email ${supportEmail}${supportPhone}.`,
        ].join("\n"),
        html: `
      <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
        <p>Hi ${escapeHtml(displayName)},</p>
        <p>Welcome to ${escapeHtml(companyName)}. Your account is ready.</p>
        <p>
          <a href="${escapeAttribute(`${appUrl}/auth.html`)}" style="display:inline-block;padding:12px 18px;background:#111827;color:#ffffff;text-decoration:none;border-radius:8px;">
            Open The Gauntlet
          </a>
        </p>
        <p>If you need help, email <a href="mailto:${escapeAttribute(supportEmail)}">${escapeHtml(supportEmail)}</a>${supportPhone ? ` or call ${escapeHtml(env.SUPPORT_PHONE)}` : ""}.</p>
      </div>
    `,
    });
}
function escapeHtml(value) {
    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}
function escapeAttribute(value) {
    return escapeHtml(value);
}
