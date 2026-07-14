const API_BASE_URL =
  window.GAUNTLET_API_URL ||
  (window.location.protocol === "file:" ? "http://localhost:4000/api" : `${window.location.origin}/api`);

async function request(path, options = {}) {
  let response;
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {})
      },
      ...options
    });
  } catch (error) {
    if (window.location.protocol === "file:") {
      const currentPage = decodeURIComponent(window.location.pathname.split(/[\\/]/).filter(Boolean).pop() || "auth.html");
      window.location.href = `http://localhost:4000/${currentPage}`;
      throw new Error("Opening The Gauntlet local app...");
    }

    throw new Error("The Gauntlet server is not reachable. Please restart the local server.");
  }

  if (response.status === 204) {
    return null;
  }

  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(payload?.error || "Request failed.");
  }

  return payload;
}

window.GauntletApi = {
  health() {
    return request("/health");
  },
  register(input) {
    return request("/auth/register", {
      method: "POST",
      body: JSON.stringify(input)
    });
  },
  authConfig() {
    return request("/auth/config");
  },
  login(input) {
    return request("/auth/login", {
      method: "POST",
      body: JSON.stringify(input)
    });
  },
  loginWithGoogle(input) {
    return request("/auth/google", {
      method: "POST",
      body: JSON.stringify(input)
    });
  },
  forgotPassword(input) {
    return request("/auth/forgot-password", {
      method: "POST",
      body: JSON.stringify(input)
    });
  },
  resetPassword(input) {
    return request("/auth/reset-password", {
      method: "POST",
      body: JSON.stringify(input)
    });
  },
  logout() {
    return request("/auth/logout", {
      method: "POST"
    });
  },
  me() {
    return request("/auth/me");
  },
  accountSnapshot() {
    return request("/auth/snapshot");
  },
  listGoals() {
    return request("/goals");
  },
  createGoal(input) {
    return request("/goals", {
      method: "POST",
      body: JSON.stringify(input)
    });
  },
  submitProof(input) {
    return request("/proofs", {
      method: "POST",
      body: JSON.stringify(input)
    });
  },
  listProofs() {
    return request("/proofs");
  },
  reviewProof(proofId, input) {
    return request(`/proofs/${proofId}/review`, {
      method: "PATCH",
      body: JSON.stringify(input)
    });
  },
  createDepositCheckoutSession(input) {
    return request("/wallet/checkout-session", {
      method: "POST",
      body: JSON.stringify(input)
    });
  },
  walletSummary() {
    return request("/wallet");
  },
  createShopOrder(input) {
    return request("/shop/orders", {
      method: "POST",
      body: JSON.stringify(input)
    });
  },
  listShopOrders() {
    return request("/shop/orders");
  },
  listAdminUsers() {
    return request("/admin/users");
  },
  cancelOrder(orderId) {
    return request(`/admin/orders/${orderId}/cancel`, {
      method: "POST"
    });
  }
};
