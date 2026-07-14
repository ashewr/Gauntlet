const LOCAL_APP_ORIGIN = "http://localhost:4000";

function getLocalServerPageUrl(pageName = "") {
  const cleanPage = String(pageName || "index.html").split(/[?#]/)[0] || "index.html";
  const query = typeof window !== "undefined" ? window.location.search || "" : "";
  const hash = typeof window !== "undefined" ? window.location.hash || "" : "";
  return `${LOCAL_APP_ORIGIN}/${cleanPage}${query}${hash}`;
}

function redirectFilePageToLocalServer() {
  if (typeof window === "undefined" || window.location.protocol !== "file:") {
    return;
  }

  const parts = window.location.pathname.split(/[\\/]/).filter(Boolean);
  const currentFile = decodeURIComponent(parts[parts.length - 1] || "index.html");
  const pageName = currentFile.endsWith(".html") ? currentFile : "index.html";
  window.location.replace(getLocalServerPageUrl(pageName));
}

redirectFilePageToLocalServer();

const totalDays = 30;
let completedDays = 0;

const completionText = document.getElementById("completion-text");
const progressBar = document.getElementById("progress-bar");
const dayPill = document.getElementById("day-pill");
const streakPill = document.getElementById("streak-pill");
const proofSummary = document.getElementById("proof-summary");
const proofNote = document.getElementById("proof-note");
const proofTask = document.getElementById("proof-task");
const calendarGrid = document.getElementById("calendar-grid");
const logForm = document.getElementById("log-form");
const paymentForm = document.getElementById("payment-form");
const commentForm = document.getElementById("comment-form");
const commentList = document.getElementById("comment-list");
const commentInput = document.getElementById("comment-input");
const paymentStatus = document.getElementById("payment-status");
const photoInput = document.getElementById("photo-input");
const photoStatus = document.getElementById("photo-status");
const uploadPreview = document.getElementById("upload-preview");
const uploadPreviewImage = document.getElementById("upload-preview-image");
const proofStatusChip = document.getElementById("proof-status-chip");
const proofSubmitButton = document.getElementById("proof-submit-button");
const proofHelperText = document.getElementById("proof-helper-text");
const taskInput = document.getElementById("task-input");
const noteInput = document.getElementById("note-input");
const goalTitleInput = document.getElementById("goal-title-input");
const goalCategoryInput = document.getElementById("goal-category-input");
const dashboardGoal = document.getElementById("dashboard-goal");
const dashboardCategory = document.getElementById("dashboard-category");
const dashboardDeadline = document.getElementById("dashboard-deadline");
const dashboardStreak = document.getElementById("dashboard-streak");
const dashboardProjectedReward = document.getElementById("dashboard-projected-reward");
const dashboardBankBalance = document.getElementById("dashboard-bank-balance");
const dashboardStaxGain = document.getElementById("dashboard-stax-gain");
const dashboardRewardCopy = document.getElementById("dashboard-reward-copy");
const dashboardMoneyStatus = document.getElementById("dashboard-money-status");
const dashboardCurrentStax = document.getElementById("dashboard-current-stax");
const dashboardCompletedGauntlets = document.getElementById("dashboard-completed-gauntlets");
const dashboardLockedStax = document.getElementById("dashboard-locked-stax");
const dashboardAvailableStax = document.getElementById("dashboard-available-stax");
const dashboardBankCopy = document.getElementById("dashboard-bank-copy");
const dashboardGoalsList = document.getElementById("dashboard-goals-list");
const dashboardStatsCompleted = document.getElementById("dashboard-stats-completed");
const dashboardStatsLaunched = document.getElementById("dashboard-stats-launched");
const dashboardStatsEarned = document.getElementById("dashboard-stats-earned");
const dashboardStatsSpent = document.getElementById("dashboard-stats-spent");
const dashboardStatsLost = document.getElementById("dashboard-stats-lost");
const dashboardStatsOrders = document.getElementById("dashboard-stats-orders");
const dashboardStatsCopy = document.getElementById("dashboard-stats-copy");
const stakeInput = document.getElementById("stake-input");
const goalLengthInput = document.getElementById("goal-length-input");
const goalLengthHint = document.getElementById("goal-length-hint");
const goalRewardHint = document.getElementById("goal-reward-hint");
const proofScheduleInput = document.getElementById("proof-schedule-input");
const proofScheduleHint = document.getElementById("proof-schedule-hint");
const proofRequiredInput = document.getElementById("proof-required-input");
const proofRequiredHint = document.getElementById("proof-required-hint");
const chipButtons = document.querySelectorAll(".chip-button");
const setupGoalTitle = document.getElementById("setup-goal-title");
const setupGoalLength = document.getElementById("setup-goal-length");
const setupLengthHint = document.getElementById("setup-length-hint");
const setupProofSchedule = document.getElementById("setup-proof-schedule");
const setupProofScheduleHint = document.getElementById("setup-proof-schedule-hint");
const setupStake = document.getElementById("setup-stake");
const setupPreviewGoal = document.getElementById("setup-preview-goal");
const setupPreviewStake = document.getElementById("setup-preview-stake");
const setupPreviewLength = document.getElementById("setup-preview-length");
const setupPreviewProofSchedule = document.getElementById("setup-preview-proof-schedule");
const setupPreviewReward = document.getElementById("setup-preview-reward");
const setupPaymentForm = document.getElementById("setup-payment-form");
const setupPaymentStatus = document.getElementById("setup-payment-status");
const setupChipButtons = document.querySelectorAll(".setup-chip");
const groupPotForm = document.getElementById("group-pot-form");
const groupTitle = document.getElementById("group-title");
const groupBuyin = document.getElementById("group-buyin");
const groupPlayers = document.getElementById("group-players");
const groupRule = document.getElementById("group-rule");
const groupProofType = document.getElementById("group-proof-type");
const potTotal = document.getElementById("pot-total");
const potCommission = document.getElementById("pot-commission");
const potWinnerCredit = document.getElementById("pot-winner-credit");
const potRule = document.getElementById("pot-rule");
const potProofRule = document.getElementById("pot-proof-rule");
const selectableCards = document.querySelectorAll(".selectable-card");
const shopBuyButtons = document.querySelectorAll(".shop-buy-button");
const shopCreditStatus = document.getElementById("shop-credit-status");
const shopLastPurchase = document.getElementById("shop-last-purchase");
const shopShippingAddress = document.getElementById("shop-shipping-address");
const checkoutModal = document.getElementById("checkout-modal");
const checkoutForm = document.getElementById("checkout-form");
const checkoutItemName = document.getElementById("checkout-item-name");
const checkoutItemPrice = document.getElementById("checkout-item-price");
const checkoutShippingNameInput = document.getElementById("checkout-shipping-name");
const checkoutShippingAddressLine1Input = document.getElementById("checkout-shipping-address-line-1");
const checkoutShippingAddressLine2Input = document.getElementById("checkout-shipping-address-line-2");
const checkoutShippingCityInput = document.getElementById("checkout-shipping-city");
const checkoutShippingStateInput = document.getElementById("checkout-shipping-state");
const checkoutShippingPostalCodeInput = document.getElementById("checkout-shipping-postal-code");
const checkoutShippingCountryInput = document.getElementById("checkout-shipping-country");
const checkoutCloseButtons = document.querySelectorAll("[data-checkout-close]");
const bankForm = document.getElementById("bank-form");
const bankAmount = document.getElementById("bank-amount");
const bankMethod = document.getElementById("bank-method");
const bankStatus = document.getElementById("bank-status");
const bankPreviewCash = document.getElementById("bank-preview-cash");
const bankPreviewBonus = document.getElementById("bank-preview-bonus");
const bankPreviewReward = document.getElementById("bank-preview-reward");
const bankPreviewWalletTotal = document.getElementById("bank-preview-wallet-total");
const bankPreviewWalletTotal2 = document.getElementById("bank-preview-wallet-total-2");
const bankSelectedLabel = document.getElementById("bank-selected-label");
const bankBaseStax = document.getElementById("bank-base-stax");
const walletCurrentStax = document.getElementById("wallet-current-stax");
const walletAvailableStax = document.getElementById("wallet-available-stax");
const setupWalletBalance = document.getElementById("setup-wallet-balance");
const shopBalancePill = document.getElementById("shop-balance-pill");
const bankWalletBalance = document.getElementById("bank-wallet-balance");
const launchGauntletButton = document.getElementById("launch-gauntlet-button");
const launchGauntletStatus = document.getElementById("launch-gauntlet-status");
const createAccountButton = document.getElementById("create-account-button");
const createAccountStatus = document.getElementById("create-account-status");
const setupAccountPill = document.getElementById("setup-account-pill");
const setupAccountComplete = document.getElementById("setup-account-complete");
const setupStepBank = document.getElementById("setup-step-bank");
const quickSignupGoogle = document.getElementById("quick-signup-google");
const saveChallengeSetupButton = document.getElementById("save-challenge-setup-button");
const saveChallengeStatus = document.getElementById("save-challenge-status");
const launchGroupButton = document.getElementById("launch-group-button");
const launchGroupStatus = document.getElementById("launch-group-status");
const groupPreviewStatus = document.getElementById("group-preview-status");
const groupProofSummary = document.getElementById("group-proof-summary");
const moneyChips = document.querySelectorAll(".money-chip");
const addMoneyButton = document.getElementById("add-money-button");
const accountDisplayName = document.getElementById("account-display-name");
const accountUsername = document.getElementById("account-username");
const accountEmail = document.getElementById("account-email");
const accountPassword = document.getElementById("account-password");
const gauntletPageTitle = document.getElementById("gauntlet-page-title");
const gauntletPageStatus = document.getElementById("gauntlet-page-status");
const gauntletPageCategory = document.getElementById("gauntlet-page-category");
const gauntletPageStake = document.getElementById("gauntlet-page-stake");
const gauntletPageCheckins = document.getElementById("gauntlet-page-checkins");
const gauntletPageStreak = document.getElementById("gauntlet-page-streak");
const gauntletPageWallet = document.getElementById("gauntlet-page-wallet");
const gauntletPageProgressText = document.getElementById("gauntlet-page-progress-text");
const gauntletPageProgressBar = document.getElementById("gauntlet-page-progress-bar");
const gauntletLaunchNote = document.getElementById("gauntlet-launch-note");
const gauntletProofTitle = document.getElementById("gauntlet-proof-title");
const gauntletProofMedia = document.getElementById("gauntlet-proof-media");
const gauntletProofImage = document.getElementById("gauntlet-proof-image");
const gauntletProofTask = document.getElementById("gauntlet-proof-task");
const gauntletProofNote = document.getElementById("gauntlet-proof-note");
const loginForm = document.getElementById("login-form");
const loginGoogleButton = document.getElementById("login-google-button");
const googleLoginPanel = document.getElementById("google-login-panel");
const googleAccountChoice = document.getElementById("google-account-choice");
const loginPassword = document.getElementById("login-password");
const loginStatus = document.getElementById("login-status");
const authForm = document.getElementById("auth-form");
const authUsername = document.getElementById("auth-username");
const authEmail = document.getElementById("auth-email");
const authPassword = document.getElementById("auth-password");
const authLoginButton = document.getElementById("auth-login-button");
const authSignupButton = document.getElementById("auth-signup-button");
const authStatus = document.getElementById("auth-status");
const authGoogleButton = document.getElementById("auth-google-button");
const forgotPasswordButton = document.getElementById("forgot-password-button");
const forgotPasswordStatus = document.getElementById("forgot-password-status");
const resetPasswordForm = document.getElementById("reset-password-form");
const resetPasswordInput = document.getElementById("reset-password-input");
const resetPasswordConfirmInput = document.getElementById("reset-password-confirm-input");
const resetPasswordButton = document.getElementById("reset-password-button");
const resetPasswordStatus = document.getElementById("reset-password-status");
const homeBrandLink = document.getElementById("home-brand-link");
const homeBrandTag = document.getElementById("home-brand-tag");
const adminAccountCount = document.getElementById("admin-account-count");
const adminAccountTotal = document.getElementById("admin-account-total");
const adminCurrentUser = document.getElementById("admin-current-user");
const adminEmptyState = document.getElementById("admin-empty-state");
const adminSearchInput = document.getElementById("admin-search-input");
const adminAccountsBody = document.getElementById("admin-accounts-body");
const adminAccountDetailList = document.getElementById("admin-account-detail-list");
const adminResetForm = document.getElementById("admin-reset-form");
const adminResetUsername = document.getElementById("admin-reset-username");
const adminResetPassword = document.getElementById("admin-reset-password");
const adminResetStatus = document.getElementById("admin-reset-status");
const welcomeCopy = document.getElementById("welcome-copy");
const feedList = document.getElementById("feed-list");
const friendCards = document.getElementById("friend-cards");
const followingCount = document.getElementById("following-count");
const followPicker = document.getElementById("follow-picker");
const followStatus = document.getElementById("follow-status");
const setupRewardHint = document.getElementById("setup-reward-hint");
const devilForm = document.getElementById("devil-form");
const devilFriend = document.getElementById("devil-friend");
const devilGoal = document.getElementById("devil-goal");
const devilWager = document.getElementById("devil-wager");
const devilPreviewWager = document.getElementById("devil-preview-wager");
const devilPreviewCommission = document.getElementById("devil-preview-commission");
const devilPreviewWin = document.getElementById("devil-preview-win");
const devilPreviewLose = document.getElementById("devil-preview-lose");
const devilProofRule = document.getElementById("devil-proof-rule");
const devilStatus = document.getElementById("devil-status");
const launchDevilButton = document.getElementById("launch-devil-button");
const devilHistory = document.getElementById("devil-history");
const logoutButtons = document.querySelectorAll(".logout-button");
const homeProgressTitle = document.getElementById("home-progress-title");
const homeProgressStatus = document.getElementById("home-progress-status");
const homeProgressStreak = document.getElementById("home-progress-streak");
const homeProgressCount = document.getElementById("home-progress-count");
const homeProgressNextStep = document.getElementById("home-progress-next-step");
const homeProgressBar = document.getElementById("home-progress-bar");
const homeProofTip = document.getElementById("home-proof-tip");
const lateSaveCard = document.getElementById("late-save-card");
const lateSaveStatus = document.getElementById("late-save-status");
const loginLinks = document.querySelectorAll(".login-link");
const homepageLoginButton = document.getElementById("homepage-login-button");
const setupNavLinks = document.querySelectorAll("[data-setup-nav]");
const addGoalNavLinks = document.querySelectorAll("[data-add-goal-nav]");
const gauntletSwitcher = document.getElementById("gauntlet-switcher");

const FRIEND_LIBRARY = [
  {
    id: "nia",
    name: "Nia Torres",
    shortName: "Nia",
    avatar: "N",
    avatarClass: "coral",
    earned: 220,
    spent: 80,
    streak: 11,
    note: "Posted a sunrise 5K proof shot and hit day 11.",
  },
  {
    id: "jules",
    name: "Jules Park",
    shortName: "Jules",
    avatar: "J",
    avatarClass: "gold",
    earned: 145,
    spent: 40,
    streak: 8,
    note: "Locked in a no-spend gauntlet and kept the streak alive.",
  },
  {
    id: "rico",
    name: "Rico Lane",
    shortName: "Rico",
    avatar: "R",
    avatarClass: "sky",
    earned: 0,
    spent: 0,
    streak: 0,
    note: "Missed a check-in and is resetting tomorrow.",
  },
  {
    id: "maya",
    name: "Maya Chen",
    shortName: "Maya",
    avatar: "M",
    avatarClass: "gold",
    earned: 310,
    spent: 120,
    streak: 16,
    note: "Finished a study gauntlet and bought a Robux card.",
  },
];

const APP_STATE_KEY = "the-gauntlet-state-v2";
const ACCOUNT_DB_KEY = "the-gauntlet-accounts-v1";
const FLASH_MESSAGE_KEY = "the-gauntlet-flash-v1";
const COMPLETION_EVENT_KEY = "the-gauntlet-completion-event-v1";
const FAILURE_EVENT_KEY = "the-gauntlet-failure-event-v1";
const BETA_WELCOME_EVENT_KEY = "the-gauntlet-beta-welcome-event-v1";
const SETUP_CONFETTI_KEY = "the-gauntlet-setup-confetti-v1";
const TERMS_ACCEPTANCE_KEY = "the-gauntlet-terms-accepted-v1";
const BETA_SIGNUP_STAX_REWARD = 10;
const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const VISIT_SESSION_PREFIX = "the-gauntlet-visit-v1:";
const BLOCKED_USERNAME_TERMS = [
  "fuck",
  "shit",
  "bitch",
  "ass",
  "asshole",
  "bastard",
  "dick",
  "penis",
  "vagina",
  "sex",
  "sexy",
  "sexual",
  "sext",
  "sexting",
  "nude",
  "nudes",
  "naked",
  "boob",
  "boobs",
  "breast",
  "breasts",
  "tit",
  "tits",
  "horny",
  "cum",
  "cums",
  "cumming",
  "orgasm",
  "fetish",
  "bdsm",
  "xxx",
  "porn",
  "kill",
  "murder",
  "suicide",
  "terror",
  "nazi",
  "racist",
  "kkk",
  "loser",
  "moron",
  "idiot",
];
const BLOCKED_USERNAME_NAMES = ["hitler", "stalin", "binladen", "saddam", "polpot"];

cleanupLocalStoragePayload();

function getAppState() {
  try {
    const saved = localStorage.getItem(APP_STATE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      const parsedGauntlets = Array.isArray(parsed.gauntlets) ? parsed.gauntlets : [];
      const legacyGauntlet = parsed.gauntlet || null;
      const gauntlets =
        parsedGauntlets.length > 0
          ? parsedGauntlets
          : legacyGauntlet
            ? [{ id: legacyGauntlet.id || "g-legacy", ...legacyGauntlet }]
            : [];
      const currentGauntletId = String(parsed.currentGauntletId || (legacyGauntlet?.id || (gauntlets[0]?.id || "")));
      const currentGauntlet =
        gauntlets.find((item) => String(item.id) === currentGauntletId) || gauntlets[0] || legacyGauntlet || null;
      const parsedProofByGauntlet =
        parsed.proofByGauntlet && typeof parsed.proofByGauntlet === "object" && !Array.isArray(parsed.proofByGauntlet)
          ? parsed.proofByGauntlet
          : {};
      const currentProofFromMap = currentGauntlet ? parsedProofByGauntlet[String(currentGauntlet.id || "")] || null : null;
      const normalizedUsername = normalizeUsername(parsed.username || "").toLowerCase();
      const savedAccount = parsed.loggedIn && normalizedUsername
        ? getAccountDatabase().find((account) => account.usernameKey === normalizedUsername) || null
        : null;

      if (savedAccount) {
        return buildAppStateFromAccount(savedAccount, parsed.currentGauntletId || currentGauntlet?.id || "");
      }

      return {
        staxBalance: Number(parsed.staxBalance || 0),
        walletReady: Boolean(parsed.walletReady),
        loggedIn: Boolean(parsed.loggedIn),
        isAdmin: Boolean(parsed.isAdmin),
        profileName: parsed.profileName || "Player One",
        username: parsed.username || "@player",
        email: parsed.email || "",
        gauntlets,
        currentGauntletId: currentGauntlet ? String(currentGauntlet.id || currentGauntletId || "") : "",
        gauntlet: currentGauntlet || null,
        proofByGauntlet: parsedProofByGauntlet,
        proof: currentProofFromMap || parsed.proof || null,
        devilBets: Array.isArray(parsed.devilBets) ? parsed.devilBets : [],
      };
    }
  } catch (error) {
    // Ignore local storage issues and fall back to defaults.
  }

  return {
    staxBalance: 0,
    walletReady: false,
    loggedIn: false,
    isAdmin: false,
    profileName: "Player One",
    username: "@player",
    email: "",
    gauntlets: [],
    currentGauntletId: "",
    gauntlet: null,
    proofByGauntlet: {},
    proof: null,
    devilBets: [],
  };
}

function ensureGauntletId(gauntlet) {
  if (!gauntlet) return null;
  if (gauntlet.id) return gauntlet;
  return { id: `g-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, ...gauntlet };
}

function getWorkingGauntlets(gauntlets = appState.gauntlets) {
  return (Array.isArray(gauntlets) ? gauntlets : []).filter((item) => item && !item.failed && !item.completed);
}

function normalizeGoalKey(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function getGauntletDuplicateKey(title, category = "Custom", totalDaysValue = 0, stakeValue = 0) {
  const goalKey = normalizeGoalKey(title);
  if (!goalKey) {
    return "";
  }

  return goalKey;
}

function isExpiredCompletedGauntlet(gauntlet, now = Date.now()) {
  if (!gauntlet?.completed) {
    return false;
  }

  const completedAtRaw = gauntlet.completedAt || gauntlet.updatedAt || gauntlet.lastLoggedDate || gauntlet.lastProofCalendarDate || "";
  const completedAt = completedAtRaw ? new Date(completedAtRaw).getTime() : NaN;
  if (!Number.isFinite(completedAt)) {
    return false;
  }

  return now - completedAt >= ONE_DAY_MS;
}

function shouldHideGauntletFromDashboard(gauntlet, currentId = appState.currentGauntletId || appState.gauntlet?.id || "") {
  if (shouldHideGauntletAfterReview(gauntlet, currentId)) {
    return true;
  }

  if (isExpiredCompletedGauntlet(gauntlet)) {
    return true;
  }

  return false;
}

function hasDuplicateGauntlet(title, category = "Custom", totalDaysValue = 0, stakeValue = 0, gauntlets = appState.gauntlets) {
  const duplicateKey = getGauntletDuplicateKey(title, category, totalDaysValue, stakeValue);
  if (!duplicateKey) {
    return false;
  }

  return (Array.isArray(gauntlets) ? gauntlets : []).some(
    (item) =>
      item &&
      !item.failed &&
      !item.completed &&
      getGauntletDuplicateKey(item?.title, item?.category || "Custom", item?.totalDays || 0, item?.stake || item?.requestedStake || 0) === duplicateKey
  );
}

function pruneExpiredCompletedGauntletSelection() {
  const gauntlets = Array.isArray(appState.gauntlets) ? appState.gauntlets : [];
  const visibleGauntlets = gauntlets.filter((item) => item && !shouldHideGauntletFromDashboard(item));
  const currentId = String(appState.currentGauntletId || appState.gauntlet?.id || "");

  if (currentId && visibleGauntlets.some((item) => String(item?.id || "") === currentId)) {
    return;
  }

  const nextGauntlet = visibleGauntlets[0] || null;
  appState.currentGauntletId = nextGauntlet ? String(nextGauntlet.id || "") : "";
  appState.gauntlet = nextGauntlet;
  completedDays = nextGauntlet && Number.isFinite(nextGauntlet.completedDays) ? Number(nextGauntlet.completedDays || 0) : 0;
}

function showGauntletSavedSignal(message, button) {
  showToast(message);
  if (!button) {
    return;
  }

  const originalLabel = button.dataset.originalLabel || button.textContent || "Save goal";
  button.dataset.originalLabel = originalLabel;
  button.textContent = "Saved OK";
  button.classList.add("saved-pulse");
  window.setTimeout(() => {
    button.textContent = originalLabel;
    button.classList.remove("saved-pulse");
  }, 1600);
}

function setCurrentGauntletById(id, { save = true } = {}) {
  if (!id || !Array.isArray(appState.gauntlets) || appState.gauntlets.length === 0) {
    appState.currentGauntletId = "";
    appState.gauntlet = null;
    appState.proof = null;
    completedDays = 0;
    if (save) saveAppState(appState);
    return;
  }

  const match = appState.gauntlets.find((item) => String(item.id) === String(id));
  if (!match) {
    return;
  }

  appState.currentGauntletId = String(match.id);
  appState.gauntlet = match;
  completedDays = Number(match.completedDays || 0);
  if (appState.loggedIn) {
    const usernameKey = getCurrentUsernameKey(appState);
    const account = usernameKey ? findAccountByUsername(usernameKey) : null;
    appState.proof =
      (account ? getLatestAccountProofForGauntlet(account, match.id) : null) ||
      (appState.proofByGauntlet && typeof appState.proofByGauntlet === "object"
        ? appState.proofByGauntlet[String(match.id || "")]
        : null) ||
      null;
  } else {
    appState.proof =
      appState.proofByGauntlet && typeof appState.proofByGauntlet === "object"
        ? appState.proofByGauntlet[String(match.id || "")] || null
        : null;
  }
  if (save) saveAppState(appState);
}

function shouldHideGauntletAfterReview(gauntlet, currentId = appState.currentGauntletId || appState.gauntlet?.id || "") {
  if (!gauntlet?.failed || !gauntlet?.dismissAfterView) {
    return false;
  }

  return String(gauntlet.id || "") !== String(currentId || "");
}

function markFailedGauntletViewed(id) {
  const gauntletId = String(id || "");
  if (!gauntletId) {
    return false;
  }

  let updated = false;
  const now = new Date().toISOString();
  const nextGauntlets = (Array.isArray(appState.gauntlets) ? appState.gauntlets : []).map((gauntlet) => {
    if (String(gauntlet?.id || "") !== gauntletId || !gauntlet?.failed || gauntlet?.dismissAfterView) {
      return gauntlet;
    }

    updated = true;
    return {
      ...gauntlet,
      dismissAfterView: true,
      failedViewedAt: now,
    };
  });

  if (!updated) {
    return false;
  }

  appState.gauntlets = nextGauntlets;
  if (appState.gauntlet && String(appState.gauntlet.id || "") === gauntletId) {
    appState.gauntlet = nextGauntlets.find((gauntlet) => String(gauntlet?.id || "") === gauntletId) || appState.gauntlet;
  }
  saveAppState(appState);
  return true;
}

function updateGauntletInList(nextGauntlet) {
  if (!nextGauntlet) return;
  const gauntlets = Array.isArray(appState.gauntlets) ? [...appState.gauntlets] : [];
  const id = String(nextGauntlet.id || "");
  const index = gauntlets.findIndex((item) => String(item.id || "") === id);
  if (index === -1) {
    gauntlets.unshift(nextGauntlet);
  } else {
    gauntlets[index] = nextGauntlet;
  }
  appState.gauntlets = gauntlets;
  appState.gauntlet = nextGauntlet;
  appState.currentGauntletId = id;
}

function ensureGauntletSavedLocally(nextGauntlet) {
  if (!nextGauntlet?.id) {
    return false;
  }

  const gauntletId = String(nextGauntlet.id);
  const inAppState = getAppState();
  const savedInState = Array.isArray(inAppState.gauntlets)
    ? inAppState.gauntlets.some((item) => String(item?.id || "") === gauntletId)
    : false;

  const usernameKey = appState.loggedIn ? getCurrentUsernameKey(appState) : "";
  const account = usernameKey ? findAccountByUsername(usernameKey) : null;
  const savedInAccount = account
    ? normalizeAccountGauntlets(account).gauntlets.some((item) => String(item?.id || "") === gauntletId)
    : false;

  if (savedInState && (!appState.loggedIn || savedInAccount)) {
    return true;
  }

  if (appState.loggedIn && usernameKey) {
    updateStoredAccount(usernameKey, (current) => {
      const bundle = normalizeAccountGauntlets(current);
      const gauntlets = Array.isArray(bundle.gauntlets) ? [...bundle.gauntlets] : [];
      const existingIndex = gauntlets.findIndex((item) => String(item?.id || "") === gauntletId);
      if (existingIndex === -1) {
        gauntlets.unshift(nextGauntlet);
      } else {
        gauntlets[existingIndex] = nextGauntlet;
      }

      return {
        ...current,
        gauntlets,
        currentGauntletId: gauntletId,
        gauntlet: nextGauntlet,
        activeChallengeTitle: nextGauntlet.title || "No active challenge",
        activeChallengeStatus: nextGauntlet.active ? "Active" : nextGauntlet.fundingPending ? "Needs funds" : "Not active",
        updatedAt: new Date().toISOString(),
      };
    });
  }

  saveAppState(appState);
  const verifiedState = getAppState();
  return Array.isArray(verifiedState.gauntlets)
    ? verifiedState.gauntlets.some((item) => String(item?.id || "") === gauntletId)
    : false;
}

function saveAppState(nextState) {
  let savedState = true;
  const storageState = buildStoredAppSnapshot(nextState);
  try {
    localStorage.setItem(APP_STATE_KEY, JSON.stringify(storageState));
  } catch (error) {
    try {
      localStorage.setItem(
        APP_STATE_KEY,
        JSON.stringify({
          ...storageState,
          proof: compactProofForStorage(storageState?.proof, false),
          proofByGauntlet: Object.fromEntries(
            Object.entries(storageState?.proofByGauntlet || {}).map(([key, value]) => [key, compactProofForStorage(value, false)])
          ),
        })
      );
    } catch (retryError) {
      savedState = false;
    }
  }

  const syncedAccount = syncCurrentAccountRecord(nextState);
  return Boolean(savedState && syncedAccount !== false);
}

function setFlashMessage(message, type = "success") {
  try {
    sessionStorage.setItem(
      FLASH_MESSAGE_KEY,
      JSON.stringify({
        message,
        type,
      })
    );
  } catch (error) {
    // Ignore session storage issues in the local prototype.
  }
}

function setCompletionEvent(event) {
  try {
    localStorage.setItem(COMPLETION_EVENT_KEY, JSON.stringify(event));
  } catch (error) {
    // Keep completion events local-only and best-effort.
  }
}

function consumeCompletionEvent() {
  try {
    const raw = localStorage.getItem(COMPLETION_EVENT_KEY);
    if (!raw) {
      return null;
    }

    localStorage.removeItem(COMPLETION_EVENT_KEY);
    return JSON.parse(raw);
  } catch (error) {
    return null;
  }
}

function setFailureEvent(event) {
  try {
    localStorage.setItem(FAILURE_EVENT_KEY, JSON.stringify(event));
  } catch (error) {
    // Keep failure events local-only and best-effort.
  }
}

function consumeFailureEvent() {
  try {
    const raw = localStorage.getItem(FAILURE_EVENT_KEY);
    if (!raw) {
      return null;
    }

    localStorage.removeItem(FAILURE_EVENT_KEY);
    return JSON.parse(raw);
  } catch (error) {
    return null;
  }
}

function setBetaWelcomeEvent(event) {
  try {
    localStorage.setItem(BETA_WELCOME_EVENT_KEY, JSON.stringify(event));
  } catch (error) {
    // Keep beta welcome events local-only and best-effort.
  }
}

function consumeBetaWelcomeEvent() {
  try {
    const raw = localStorage.getItem(BETA_WELCOME_EVENT_KEY);
    if (!raw) {
      return null;
    }

    localStorage.removeItem(BETA_WELCOME_EVENT_KEY);
    return JSON.parse(raw);
  } catch (error) {
    return null;
  }
}

function queueSetupConfetti() {
  try {
    sessionStorage.setItem(SETUP_CONFETTI_KEY, "ready");
  } catch (error) {
    // Ignore session storage issues in the local prototype.
  }
}

function showToast(message, type = "success") {
  if (!message || typeof document === "undefined") {
    return;
  }

  window.__gauntletLastToastAt = Date.now();

  const existing = document.querySelector(".app-toast");
  if (existing) {
    existing.remove();
  }

  const toast = document.createElement("div");
  toast.className = `app-toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  window.setTimeout(() => {
    toast.classList.add("visible");
  }, 10);

  window.setTimeout(() => {
    toast.classList.remove("visible");
    window.setTimeout(() => {
      toast.remove();
    }, 180);
  }, 2400);
}

function confirmButtonClick(event) {
  if (typeof document === "undefined" || !event?.target) {
    return;
  }

  const target = event.target.closest("button, .solid-button, .ghost-button, [role='button']");
  if (!target || target.disabled || target.classList.contains("toast-silent")) {
    return;
  }

  const label = String(target.textContent || target.getAttribute("aria-label") || "Action").trim().replace(/\s+/g, " ");
  window.setTimeout(() => {
    if (Date.now() - Number(window.__gauntletLastToastAt || 0) < 180) {
      return;
    }
    showToast(label ? `${label} clicked.` : "Action clicked.");
  }, 120);
}

function consumeFlashMessage() {
  try {
    const raw = sessionStorage.getItem(FLASH_MESSAGE_KEY);
    if (!raw) {
      return;
    }

    sessionStorage.removeItem(FLASH_MESSAGE_KEY);
    const parsed = JSON.parse(raw);
    if (parsed?.message) {
      showToast(parsed.message, parsed.type || "success");
    }
  } catch (error) {
    // Ignore session storage issues in the local prototype.
  }
}

function launchSetupConfetti() {
  if (typeof document === "undefined") {
    return;
  }

  const colors = ["#ff5f45", "#f4c95d", "#6ad5ff", "#7cff8f", "#f7f4ea"];
  const pieces = 32;

  for (let index = 0; index < pieces; index += 1) {
    const confetti = document.createElement("span");
    confetti.className = "confetti-piece";
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.background = colors[index % colors.length];
    confetti.style.animationDelay = `${Math.random() * 0.25}s`;
    confetti.style.animationDuration = `${2.4 + Math.random() * 1.2}s`;
    confetti.style.transform = `translateY(-16px) rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(confetti);

    window.setTimeout(() => {
      confetti.remove();
    }, 3800);
  }
}

function hasAcceptedTerms() {
  try {
    return localStorage.getItem(TERMS_ACCEPTANCE_KEY) === "accepted";
  } catch (error) {
    return false;
  }
}

function setAcceptedTerms() {
  try {
    localStorage.setItem(TERMS_ACCEPTANCE_KEY, "accepted");
  } catch (error) {
    // Ignore local storage issues in the local prototype.
  }

  if (appState.loggedIn) {
    updateStoredAccount(getCurrentUsernameKey(appState), (account) => ({
      ...account,
      termsAcceptedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }));
  }
}

function ensureTermsModal() {
  if (typeof document === "undefined") {
    return null;
  }

  let modal = document.getElementById("terms-acceptance-modal");
  if (modal) {
    return modal;
  }

  modal = document.createElement("div");
  modal.id = "terms-acceptance-modal";
  modal.className = "app-modal-overlay hidden";
  modal.innerHTML = `
    <div class="app-modal-card terms-modal-card" role="dialog" aria-modal="true" aria-labelledby="terms-modal-title">
      <p class="card-label">Before you continue</p>
      <h2 id="terms-modal-title">Please accept the Terms of Service</h2>
      <p class="hero-text">To use The Gauntlet, you must review and accept the platform terms, privacy policy, and refund policy.</p>
      <div class="comment-item">
        <strong>Required documents</strong>
        <p>
          <a class="support-link" href="terms.html" target="_blank" rel="noopener noreferrer">Terms of Service</a>
          |
          <a class="support-link" href="privacy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          |
          <a class="support-link" href="refund.html" target="_blank" rel="noopener noreferrer">Refund Policy</a>
        </p>
      </div>
      <div class="app-modal-actions">
        <a href="terms.html" class="ghost-button">Review terms</a>
        <button type="button" id="terms-accept-button" class="solid-button">I accept and continue</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  const acceptButton = document.getElementById("terms-accept-button");
  if (acceptButton) {
    acceptButton.addEventListener("click", () => {
      setAcceptedTerms();
      modal.classList.add("hidden");
      document.body.classList.remove("modal-open");
      showToast("Terms accepted. You can continue.");
    });
  }

  return modal;
}

function showTermsAcceptanceModalIfNeeded() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  const path = window.location.pathname.toLowerCase();
  const legalPages = ["terms.html", "privacy.html", "refund.html", "support.html"];
  if (legalPages.some((page) => path.endsWith(page))) {
    return;
  }

  if (hasAcceptedTerms()) {
    return;
  }

  const modal = ensureTermsModal();
  if (!modal) {
    return;
  }

  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function ensureGoalCompletionModal() {
  if (typeof document === "undefined") {
    return null;
  }

  let modal = document.getElementById("goal-completion-modal");
  if (modal) {
    return modal;
  }

  modal = document.createElement("div");
  modal.id = "goal-completion-modal";
  modal.className = "app-modal-overlay hidden";
  modal.innerHTML = `
    <div class="app-modal-card completion-modal-card" role="dialog" aria-modal="true" aria-labelledby="completion-modal-title">
      <p class="card-label">Goal completed</p>
      <h2 id="completion-modal-title">You earned new Stax</h2>
      <p id="completion-modal-copy" class="hero-text">Your completion reward is ready.</p>
      <div class="completion-modal-reward">
        <span class="metric-label">Reward added</span>
        <strong id="completion-modal-reward">0 Stax</strong>
      </div>
      <div class="app-modal-actions">
        <button type="button" id="completion-modal-close" class="ghost-button">Stay here</button>
        <a id="completion-modal-shop" href="shop.html" class="solid-button">Go to shop</a>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  const closeButton = document.getElementById("completion-modal-close");
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      modal.classList.add("hidden");
      document.body.classList.remove("modal-open");
    });
  }

  return modal;
}

function showGoalCompletionModal(event) {
  const modal = ensureGoalCompletionModal();
  if (!modal || typeof document === "undefined") {
    return;
  }

  const rewardNode = document.getElementById("completion-modal-reward");
  const copyNode = document.getElementById("completion-modal-copy");
  if (rewardNode) {
    rewardNode.textContent = `${Number(event?.reward || 0)} Stax`;
  }
  if (copyNode) {
    copyNode.textContent = `${event?.title || "Your gauntlet"} is complete. ${Number(event?.reward || 0)} Stax was added to your account.`;
  }

  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function ensureBetaWelcomeModal() {
  if (typeof document === "undefined") {
    return null;
  }

  let modal = document.getElementById("beta-welcome-modal");
  if (modal) {
    return modal;
  }

  modal = document.createElement("div");
  modal.id = "beta-welcome-modal";
  modal.className = "app-modal-overlay hidden";
  modal.innerHTML = `
    <div class="app-modal-card beta-welcome-modal-card" role="dialog" aria-modal="true" aria-labelledby="beta-welcome-title">
      <p class="card-label">Beta supporter reward</p>
      <h2 id="beta-welcome-title">Thank you for supporting Gauntlet.</h2>
      <p id="beta-welcome-copy" class="hero-text">You helped us build the early version, so we added starter Stax to your wallet.</p>
      <div class="completion-modal-reward beta-welcome-reward">
        <span class="metric-label">Starter Stax added</span>
        <strong id="beta-welcome-reward">10 Stax</strong>
      </div>
      <div class="app-modal-actions">
        <button type="button" id="beta-welcome-close" class="solid-button">Start setup</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  const closeButton = document.getElementById("beta-welcome-close");
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      modal.classList.add("hidden");
      document.body.classList.remove("modal-open");
    });
  }

  return modal;
}

function showBetaWelcomeModal(event) {
  const modal = ensureBetaWelcomeModal();
  if (!modal || typeof document === "undefined") {
    return;
  }

  const rewardNode = document.getElementById("beta-welcome-reward");
  const copyNode = document.getElementById("beta-welcome-copy");
  if (rewardNode) {
    rewardNode.textContent = `${Number(event?.reward || BETA_SIGNUP_STAX_REWARD)} Stax`;
  }
  if (copyNode) {
    copyNode.textContent = `${Number(event?.reward || BETA_SIGNUP_STAX_REWARD)} Stax was added to your wallet. Use it to start your first goal.`;
  }

  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function handleBetaWelcomeEvent() {
  if (typeof window === "undefined" || !appState.loggedIn) {
    return;
  }

  const event = consumeBetaWelcomeEvent();
  if (!event || String(event.usernameKey || "") !== String(getCurrentUsernameKey(appState) || "")) {
    if (event) {
      setBetaWelcomeEvent(event);
    }
    return;
  }

  if (window.location.pathname.toLowerCase().endsWith("/admin.html")) {
    return;
  }

  launchSetupConfetti();
  showBetaWelcomeModal(event);
  showToast(`${Number(event.reward || BETA_SIGNUP_STAX_REWARD)} starter Stax added.`);
}

function handleCompletionEvent() {
  if (typeof window === "undefined" || !appState.loggedIn) {
    return;
  }

  const event = consumeCompletionEvent();
  if (!event || String(event.usernameKey || "") !== String(getCurrentUsernameKey(appState) || "")) {
    if (event) {
      setCompletionEvent(event);
    }
    return;
  }

  const path = window.location.pathname.toLowerCase();
  const message = `${event.title || "Gauntlet complete"} finished. ${Number(event.reward || 0)} Stax was added locally to this account.`;

  launchSetupConfetti();
  setFlashMessage(message, "success");

  if (path.endsWith("/admin.html")) {
    return;
  }

  showGoalCompletionModal(event);
  showToast(message);
}

function handleFailureEvent() {
  if (typeof window === "undefined" || !appState.loggedIn) {
    return;
  }

  const event = consumeFailureEvent();
  if (!event || String(event.usernameKey || "") !== String(getCurrentUsernameKey(appState) || "")) {
    if (event) {
      setFailureEvent(event);
    }
    return;
  }

  const message = `${event.title || "Gauntlet"} failed. You lost ${Number(event.lostStake || 0)} Stax. Try again and add more Stax to your account.`;
  setFlashMessage(message, "error");
  showToast(message, "error");
}

function consumeSetupConfetti() {
  if (!setupAccountComplete) {
    return;
  }

  try {
    const shouldLaunch = sessionStorage.getItem(SETUP_CONFETTI_KEY);
    if (shouldLaunch !== "ready") {
      return;
    }

    sessionStorage.removeItem(SETUP_CONFETTI_KEY);
    launchSetupConfetti();
  } catch (error) {
    // Ignore session storage issues in the local prototype.
  }
}

function syncAuthUI() {
  if (typeof document === "undefined") {
    return;
  }

  const hasExistingGoals = Array.isArray(appState.gauntlets) && appState.gauntlets.length > 0;
  const pathname = typeof window !== "undefined" ? window.location.pathname.toLowerCase() : "";

  document.querySelectorAll(".auth-only").forEach((element) => {
    element.classList.toggle("hidden", !appState.loggedIn);
  });

  document.querySelectorAll(".guest-only").forEach((element) => {
    element.classList.toggle("hidden", appState.loggedIn);
  });

  document.querySelectorAll(".onboarding-only").forEach((element) => {
    element.classList.remove("hidden");
  });

  document.querySelectorAll(".gauntlet-only").forEach((element) => {
    element.classList.toggle("hidden", !appState.loggedIn);
  });

  if (homeBrandLink) {
    homeBrandLink.href = "dashboard.html";
  }

  if (homeBrandTag) {
    homeBrandTag.textContent = appState.loggedIn ? "Dashboard" : "Discipline with receipts.";
  }

  setupNavLinks.forEach((link) => {
    link.textContent = hasExistingGoals ? "Add goal" : "Setup";
    link.setAttribute("href", hasExistingGoals ? "add_goal.html" : "setup.html");
  });

  addGoalNavLinks.forEach((link) => {
    link.textContent = "Add goal";
    link.setAttribute("href", "add_goal.html");
    link.classList.toggle("hidden", !hasExistingGoals);
  });

  if (appState.loggedIn && hasExistingGoals && pathname.endsWith("setup.html")) {
    window.location.replace("add_goal.html");
  }
}

async function guardProtectedPage() {
  if (typeof window === "undefined") {
    return { ok: true, restored: false };
  }

  const path = window.location.pathname.toLowerCase();
  const publicPages = ["/index.html", "/auth.html", "/login.html", "/signin.html", "/sign_up.html", "/signup.html", "/"];
  const isPublicPage = publicPages.some((page) => path.endsWith(page));

  if (!appState.loggedIn && !isPublicPage && getApiClient()) {
    const restoreResult = await restoreAuthenticatedSessionFromApi();
    if (restoreResult.ok) {
      refreshAppStateFromStorage();
      return { ok: true, restored: true };
    }
  }

  if (!appState.loggedIn && !isPublicPage) {
    setFlashMessage("Log in first to open the rest of the app.", "error");
    window.location.href = "auth.html";
    return { ok: false, redirected: true };
  }

  return { ok: true, restored: false };
}

function syncGauntletSwitcher() {
  if (!gauntletSwitcher) {
    return;
  }

  const pathname = typeof window !== "undefined" ? window.location.pathname.toLowerCase() : "";
  const isProofPage = pathname.endsWith("/proof.html") || pathname.endsWith("proof.html");
  const gauntlets = (Array.isArray(appState.gauntlets) ? appState.gauntlets : []).filter((gauntlet) => {
    if (!gauntlet) {
      return false;
    }

    if (shouldHideGauntletFromDashboard(gauntlet)) {
      return false;
    }

    if (!isProofPage) {
      return true;
    }

    return !gauntlet.failed && !gauntlet.completed;
  });
  gauntletSwitcher.innerHTML = "";

  if (!gauntlets.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "No goal yet";
    gauntletSwitcher.appendChild(option);
    gauntletSwitcher.value = "";
    return;
  }

  gauntlets.forEach((gauntlet) => {
    const option = document.createElement("option");
    option.value = String(gauntlet.id || "");
    const status = gauntlet.completed
      ? "Completed"
      : gauntlet.failed
        ? "Failed"
        : gauntlet.pendingProof?.status === "pending"
          ? "Pending"
          : gauntlet.active
            ? "Active"
            : "Saved";
    option.textContent = `${gauntlet.title || "Goal"} (${status})`;
    gauntletSwitcher.appendChild(option);
  });

  const selected = appState.currentGauntletId || String(appState.gauntlet?.id || "");
  gauntletSwitcher.value = gauntlets.some((gauntlet) => String(gauntlet.id || "") === String(selected))
    ? selected
    : String(gauntlets[0]?.id || "");
}

if (gauntletSwitcher) {
  gauntletSwitcher.addEventListener("change", () => {
    const id = gauntletSwitcher.value;
    setCurrentGauntletById(id);
    refreshAppStateFromStorage();
    showToast("Switched goal.");
  });
}

if (dashboardGoalsList) {
  dashboardGoalsList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-goal-open]");
    if (!button) {
      return;
    }

    const id = String(button.dataset.goalOpen || "");
    if (!id) {
      return;
    }

    setCurrentGauntletById(id);
    const selectedGauntlet = (Array.isArray(appState.gauntlets) ? appState.gauntlets : []).find(
      (gauntlet) => String(gauntlet?.id || "") === id
    );
    const dismissedFailedGoal = selectedGauntlet?.failed ? markFailedGauntletViewed(id) : false;
    refreshAppStateFromStorage();
    showToast(dismissedFailedGoal ? "Failed goal reviewed. It will be removed after you move on." : "Opened selected goal.");
  });
}

loginLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    if (typeof window === "undefined") {
      return;
    }

    window.location.href = window.location.protocol === "file:" ? getLocalServerPageUrl("auth.html") : "auth.html";
  });
});

if (homepageLoginButton) {
  homepageLoginButton.addEventListener("click", () => {
    if (typeof window === "undefined") {
      return;
    }

    window.location.href = window.location.protocol === "file:" ? getLocalServerPageUrl("auth.html") : "auth.html";
  });
}

let appState = getAppState();

if (appState.gauntlet && Number.isFinite(appState.gauntlet.completedDays)) {
  completedDays = appState.gauntlet.completedDays;
}

function formatStax(amount) {
  return `${amount} Stax`;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
}

function getFirstName(nameOrEmail) {
  const raw = String(nameOrEmail || "").trim();
  if (!raw) {
    return "Player";
  }

  if (raw.includes("@")) {
    const local = raw.split("@")[0].replace(/[._-]+/g, " ").trim();
    const first = local.split(/\s+/)[0] || "Player";
    return first.charAt(0).toUpperCase() + first.slice(1);
  }

  const first = raw.split(/\s+/)[0];
  return first.charAt(0).toUpperCase() + first.slice(1);
}

function completeLogin(profileName, username, email, destination = "index.html", message = "") {
  appState.loggedIn = true;
  appState.profileName = profileName;
  appState.username = username;
  appState.email = String(email).trim();
  const didSave = saveAppState(appState);
  if (!didSave) {
    showToast("Could not save your session locally. Please try again.", "error");
    return false;
  }
  syncDashboardUI();
  syncSocialUI();

  if (createAccountStatus) {
    createAccountStatus.textContent = message || `Signed in as ${email}.`;
  }

  if (loginStatus) {
    loginStatus.textContent = message || `Signed in as ${email}.`;
  }

  if (typeof window !== "undefined") {
    setFlashMessage(message || `Signed in as ${email}.`);
    window.location.href = destination;
  }
  return true;
}

function normalizeUsername(value) {
  const cleaned = String(value || "")
    .trim()
    .replace(/^@+/, "")
    .replace(/[^a-zA-Z0-9._-]/g, "");
  return cleaned || "player";
}

function getAccountDatabase() {
  try {
    const saved = localStorage.getItem(ACCOUNT_DB_KEY);
    const parsed = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function compactProofForStorage(proof, keepImageData = false) {
  if (!proof || typeof proof !== "object") {
    return proof;
  }

  return {
    ...proof,
    note: String(proof.note || "").slice(0, 280),
    task: String(proof.task || "").slice(0, 140),
    fileName: String(proof.fileName || "").slice(0, 120),
    imageData: keepImageData ? proof.imageData || "" : "",
  };
}

function compactAccountForStorage(account) {
  if (!account || typeof account !== "object") {
    return account;
  }

  const currentGauntletId = String(account.currentGauntletId || account.gauntlet?.id || "");
  const proofHistory = Array.isArray(account.proofHistory)
    ? account.proofHistory.map((proof, index) => compactProofForStorage(proof, proof?.status === "pending" && index < 2))
    : [];
  const proofByGauntletSource =
    account.proofByGauntlet && typeof account.proofByGauntlet === "object" && !Array.isArray(account.proofByGauntlet)
      ? account.proofByGauntlet
      : {};
  const proofByGauntlet = Object.fromEntries(
    Object.entries(proofByGauntletSource).map(([key, value]) => [
      key,
      compactProofForStorage(value, String(key) === currentGauntletId || value?.status === "pending"),
    ])
  );

  return {
    ...account,
    proofHistory,
    proofByGauntlet,
    proof: compactProofForStorage(account.proof, true),
    activity: Array.isArray(account.activity) ? account.activity.slice(0, 12) : [],
  };
}

function compactAccountDatabaseForStorage(accounts) {
  return Array.isArray(accounts) ? accounts.map((account) => compactAccountForStorage(account)) : [];
}

function buildStoredAppSnapshot(state) {
  if (!state || typeof state !== "object") {
    return state;
  }

  if (state.loggedIn) {
    return {
      loggedIn: true,
      isAdmin: Boolean(state.isAdmin),
      profileName: state.profileName || "Player One",
      username: state.username || "@player",
      email: state.email || "",
      walletReady: Boolean(state.walletReady),
      staxBalance: Number(state.staxBalance || 0),
      currentGauntletId: String(state.currentGauntletId || state.gauntlet?.id || ""),
      gauntlets: [],
      gauntlet: null,
      proofByGauntlet: {},
      proof: null,
      devilBets: [],
    };
  }

  const currentGauntletId = String(state.currentGauntletId || state.gauntlet?.id || "");
  const proofByGauntletSource =
    state.proofByGauntlet && typeof state.proofByGauntlet === "object" && !Array.isArray(state.proofByGauntlet)
      ? state.proofByGauntlet
      : {};

  return {
    ...state,
    proof: compactProofForStorage(state?.proof, true),
    proofByGauntlet: Object.fromEntries(
      Object.entries(proofByGauntletSource).map(([key, value]) => [
        key,
        compactProofForStorage(value, String(key) === currentGauntletId || value?.status === "pending"),
      ])
    ),
  };
}

function cleanupLocalStoragePayload() {
  try {
    const accounts = getAccountDatabase();
    if (accounts.length) {
      saveAccountDatabase(accounts);
    }
  } catch (error) {
    // Ignore local cleanup issues in the local prototype.
  }

  try {
    const saved = localStorage.getItem(APP_STATE_KEY);
    if (!saved) {
      return;
    }

    const parsed = JSON.parse(saved);
    const compacted = buildStoredAppSnapshot(parsed);
    localStorage.setItem(APP_STATE_KEY, JSON.stringify(compacted));
  } catch (error) {
    // Ignore local cleanup issues in the local prototype.
  }
}

function saveAccountDatabase(accounts) {
  try {
    localStorage.setItem(ACCOUNT_DB_KEY, JSON.stringify(accounts));
    return true;
  } catch (error) {
    try {
      localStorage.setItem(ACCOUNT_DB_KEY, JSON.stringify(compactAccountDatabaseForStorage(accounts)));
      return true;
    } catch (retryError) {
      return false;
    }
  }
}

function getCurrentUsernameKey(state = appState) {
  return normalizeUsername(state?.username || "").toLowerCase();
}

function updateStoredAccount(usernameKey, updater) {
  if (!usernameKey) {
    return;
  }

  const accounts = getAccountDatabase();
  const index = accounts.findIndex((account) => account.usernameKey === usernameKey);

  if (index === -1) {
    return;
  }

  const nextAccount = updater({ ...accounts[index] });
  if (!nextAccount) {
    return;
  }

  accounts[index] = nextAccount;
  const didSave = saveAccountDatabase(accounts);
  if (!didSave) {
    return null;
  }
  return findAccountByUsername(usernameKey) || nextAccount;
}

function appendAccountActivity(usernameKey, action, details = "") {
  if (!usernameKey) {
    return;
  }

  updateStoredAccount(usernameKey, (account) => {
    const activity = Array.isArray(account.activity) ? account.activity.slice(0, 14) : [];
    activity.unshift({
      action,
      details,
      at: new Date().toISOString(),
    });

    return {
      ...account,
      activity,
      lastAction: action,
      updatedAt: new Date().toISOString(),
    };
  });
}

function appendProofToAccount(usernameKey, proofEntry) {
  if (!usernameKey || !proofEntry) {
    return null;
  }

  return updateStoredAccount(usernameKey, (account) => {
    const proofHistory = Array.isArray(account.proofHistory) ? account.proofHistory.slice(0, 19) : [];
    proofHistory.unshift({
      id: proofEntry.id || `proof-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      gauntletId: String(proofEntry.gauntletId || ""),
      task: proofEntry.task || "",
      result: proofEntry.result || "",
      time: proofEntry.time || "",
      note: proofEntry.note || "",
      source: proofEntry.source || "Screenshot proof",
      fileName: proofEntry.fileName || "",
      imageData: proofEntry.imageData || "",
      loggedAt: proofEntry.loggedAt || new Date().toISOString(),
      dayNumber: Number(proofEntry.dayNumber || 0),
      calendarDate: proofEntry.calendarDate || startOfDay(proofEntry.loggedAt || new Date()).toISOString(),
      status: proofEntry.status || "pending",
      reviewedAt: proofEntry.reviewedAt || "",
      reviewDecision: proofEntry.reviewDecision || "",
    });

    return {
      ...account,
      proofByGauntlet: {
        ...(account.proofByGauntlet && typeof account.proofByGauntlet === "object" ? account.proofByGauntlet : {}),
        [String(proofEntry.gauntletId || "")]: {
          ...proofHistory[0],
        },
      },
      proofHistory,
      updatedAt: new Date().toISOString(),
    };
  });
}

function verifyStoredProofState(usernameKey, proofId, gauntletId, expectedStatus = "") {
  const account = findAccountByUsername(usernameKey);
  if (!account) {
    return { ok: false, account: null, proof: null, gauntlet: null };
  }

  const normalizedGauntletId = String(gauntletId || "");
  const proof = Array.isArray(account.proofHistory)
    ? account.proofHistory.find((item) => String(item?.id || "") === String(proofId))
    : null;

  const gauntlets = Array.isArray(account.gauntlets) ? account.gauntlets : account.gauntlet ? [account.gauntlet] : [];
  const gauntlet = normalizedGauntletId
    ? gauntlets.find((item) => String(item?.id || "") === normalizedGauntletId) || null
    : null;
  const proofFromMap =
    normalizedGauntletId && account?.proofByGauntlet && typeof account.proofByGauntlet === "object"
      ? account.proofByGauntlet[normalizedGauntletId] || null
      : null;

  const statusMatches = !expectedStatus || String(proof?.status || "") === String(expectedStatus);
  const mapMatches = !normalizedGauntletId || !proofFromMap || String(proofFromMap?.id || "") === String(proofId);

  return {
    ok: Boolean(account && proof && statusMatches && mapMatches),
    account,
    proof,
    gauntlet,
    proofFromMap,
  };
}

function cloneValue(value) {
  return value ? JSON.parse(JSON.stringify(value)) : value;
}

function restoreAppStateSnapshot(snapshot) {
  if (!snapshot || typeof snapshot !== "object") {
    return;
  }

  appState = cloneValue(snapshot);
  completedDays =
    appState.gauntlet && Number.isFinite(appState.gauntlet.completedDays)
      ? Number(appState.gauntlet.completedDays || 0)
      : 0;
}

function normalizeAccountGauntlets(account) {
  const parsedGauntlets = Array.isArray(account?.gauntlets) ? account.gauntlets : [];
  const legacyGauntlet = account?.gauntlet || null;
  const gauntlets =
    parsedGauntlets.length > 0
      ? cloneValue(parsedGauntlets)
      : legacyGauntlet
        ? [ensureGauntletId(cloneValue(legacyGauntlet))]
        : [];

  const currentGauntletId = String(account?.currentGauntletId || legacyGauntlet?.id || gauntlets[0]?.id || "");
  const current =
    gauntlets.find((item) => String(item?.id || "") === currentGauntletId) ||
    gauntlets[0] ||
    (legacyGauntlet ? ensureGauntletId(cloneValue(legacyGauntlet)) : null);

  return {
    gauntlets,
    currentGauntletId: current ? String(current.id || currentGauntletId || "") : "",
    currentGauntlet: current || null,
  };
}

function buildAppStateFromAccount(account, preferredGauntletId = "") {
  const bundle = normalizeAccountGauntlets(account);
  const requestedId = String(preferredGauntletId || account?.currentGauntletId || bundle.currentGauntletId || "");
  const currentGauntlet =
    bundle.gauntlets.find((item) => String(item?.id || "") === requestedId) ||
    bundle.currentGauntlet ||
    null;
  const proofByGauntlet =
    account?.proofByGauntlet && typeof account.proofByGauntlet === "object" && !Array.isArray(account.proofByGauntlet)
      ? cloneValue(account.proofByGauntlet)
      : {};
  const currentProof =
    (currentGauntlet
      ? proofByGauntlet[String(currentGauntlet.id || "")] || getLatestAccountProofForGauntlet(account, currentGauntlet.id)
      : null) ||
    cloneValue(account?.proof) ||
    null;

  if (currentGauntlet && currentProof) {
    proofByGauntlet[String(currentGauntlet.id || "")] = currentProof;
  }

  return {
    staxBalance: Number(account?.currentStaxBalance || 0),
    walletReady: Boolean(account?.walletReady),
    loggedIn: true,
    isAdmin: Boolean(account?.isAdmin),
    profileName: account?.profileName || "Player One",
    username: account?.username || "@player",
    email: account?.email || "",
    gauntlets: bundle.gauntlets,
    currentGauntletId: currentGauntlet ? String(currentGauntlet.id || requestedId || "") : "",
    gauntlet: currentGauntlet || null,
    proofByGauntlet,
    proof: currentProof,
    devilBets: Array.isArray(account?.devilBets) ? cloneValue(account.devilBets) : [],
  };
}

function getLatestAccountProofForGauntlet(account, gauntletId) {
  const id = String(gauntletId || "");
  if (!id) return null;
  const map = account?.proofByGauntlet && typeof account.proofByGauntlet === "object" ? account.proofByGauntlet : null;
  if (map && map[id]) {
    return cloneValue(map[id]);
  }
  const history = Array.isArray(account?.proofHistory) ? account.proofHistory : [];
  const match = history.find((proof) => String(proof?.gauntletId || "") === id);
  return match ? cloneValue(match) : null;
}

function syncCurrentStateFromAccount(usernameKey, account) {
  if (!usernameKey || !account || getCurrentUsernameKey(appState) !== usernameKey) {
    return;
  }

  const bundle = normalizeAccountGauntlets(account);
  const accountProofMap =
    account?.proofByGauntlet && typeof account.proofByGauntlet === "object" && !Array.isArray(account.proofByGauntlet)
      ? cloneValue(account.proofByGauntlet)
      : {};
  const currentProofFromAccount = getLatestAccountProofForGauntlet(account, bundle.currentGauntletId) || cloneValue(account.proof) || null;
  if (bundle.currentGauntletId && currentProofFromAccount) {
    accountProofMap[String(bundle.currentGauntletId)] = currentProofFromAccount;
  }
  appState.loggedIn = true;
  appState.isAdmin = Boolean(account.isAdmin);
  appState.profileName = account.profileName || appState.profileName;
  appState.username = account.username || appState.username;
  appState.email = account.email || appState.email;
  appState.walletReady = Boolean(account.walletReady);
  appState.staxBalance = Number(account.currentStaxBalance || 0);
  appState.gauntlets = bundle.gauntlets;
  appState.currentGauntletId = bundle.currentGauntletId;
  appState.gauntlet = bundle.currentGauntlet;
  appState.proofByGauntlet = accountProofMap;
  appState.proof = currentProofFromAccount;
  appState.devilBets = Array.isArray(account.devilBets) ? cloneValue(account.devilBets) : [];
  completedDays =
    appState.gauntlet && Number.isFinite(appState.gauntlet.completedDays) ? Number(appState.gauntlet.completedDays || 0) : 0;
  saveAppState(appState);
}

function reviewProofForAccount(usernameKey, proofId, decision) {
  if (!usernameKey || !proofId || !["approved", "declined"].includes(decision)) {
    return { ok: false, message: "Proof review request was invalid." };
  }

  const now = new Date().toISOString();
  let reviewedProof = null;

  const nextAccount = updateStoredAccount(usernameKey, (account) => {
    const proofHistory = Array.isArray(account.proofHistory) ? [...account.proofHistory] : [];
    const proofIndex = proofHistory.findIndex((proof) => proof.id === proofId);

    if (proofIndex === -1) {
      return account;
    }

    const currentProof = { ...proofHistory[proofIndex] };
    if (currentProof.status === decision) {
      reviewedProof = currentProof;
      return account;
    }

    currentProof.status = decision;
    currentProof.reviewDecision = decision;
    currentProof.reviewedAt = now;
    proofHistory[proofIndex] = currentProof;
    reviewedProof = currentProof;

    let nextProof = account.proof ? { ...account.proof } : null;
    let completedChallenges = Number(account.completedChallenges || 0);

    if (nextProof && nextProof.id === proofId) {
      nextProof = {
        ...nextProof,
        status: decision,
        reviewDecision: decision,
        reviewedAt: now,
      };
    }
    const proofByGauntlet = {
      ...(account.proofByGauntlet && typeof account.proofByGauntlet === "object" ? account.proofByGauntlet : {}),
    };

    const bundle = normalizeAccountGauntlets(account);
    const gauntlets = Array.isArray(bundle.gauntlets) ? [...bundle.gauntlets] : [];
    const targetGauntletId = String(currentProof.gauntletId || "");
    let gauntletIndex = targetGauntletId
      ? gauntlets.findIndex((item) => String(item?.id || "") === targetGauntletId)
      : -1;
    if (gauntletIndex === -1) {
      gauntletIndex = gauntlets.findIndex((item) => String(item?.pendingProof?.id || "") === String(proofId));
    }
    const nextGauntlet = gauntletIndex >= 0 ? { ...gauntlets[gauntletIndex] } : bundle.currentGauntlet ? { ...bundle.currentGauntlet } : null;

    if (nextGauntlet) {
      const pendingId = nextGauntlet.pendingProof?.id;
      if (pendingId === proofId) {
        nextGauntlet.pendingProof = null;
      }

      if (decision === "approved") {
        nextGauntlet.active = true;
        nextGauntlet.fundingPending = false;
        nextGauntlet.failed = false;
        nextGauntlet.failureReason = "";
        nextGauntlet.completedDays = Math.max(
          Number(nextGauntlet.completedDays || 0),
          Number(currentProof.dayNumber || 0)
        );
        nextGauntlet.lastLoggedDate = currentProof.calendarDate || startOfDay(currentProof.loggedAt || now).toISOString();
        nextGauntlet.lastProofCalendarDate = currentProof.calendarDate || startOfDay(currentProof.loggedAt || now).toISOString();

        const lastRequiredProofDay = getLastRequiredProofDay(nextGauntlet);
        if (Number(nextGauntlet.completedDays || 0) >= lastRequiredProofDay) {
          nextGauntlet.active = false;
          nextGauntlet.completed = true;
          if (!nextGauntlet.accountCompletionTracked) {
            nextGauntlet.accountCompletionTracked = true;
            completedChallenges += 1;
            const completionReward = getCompletionRewardValue(nextGauntlet);
            nextGauntlet.completionReward = completionReward;
            nextGauntlet.rewardCredited = true;
            nextGauntlet.completedAt = now;
            nextGauntlet.completionCelebrationPending = true;
            nextProof = {
              ...(nextProof || currentProof),
              status: decision,
              reviewDecision: decision,
              reviewedAt: now,
            };
            setCompletionEvent({
              usernameKey,
              gauntletId: String(nextGauntlet.id || currentProof.gauntletId || ""),
              title: nextGauntlet.title || "Gauntlet",
              reward: completionReward,
              at: now,
            });
            return {
              ...account,
              gauntlets: gauntlets.map((item, idx) => (idx === gauntletIndex ? nextGauntlet : item)),
              currentGauntletId: bundle.currentGauntletId || String(nextGauntlet.id || ""),
              gauntlet:
                String(bundle.currentGauntletId || "") === String(nextGauntlet.id || "")
                  ? nextGauntlet
                  : bundle.currentGauntlet || nextGauntlet,
              proofByGauntlet: {
                ...proofByGauntlet,
                [String(currentProof.gauntletId || nextGauntlet.id || "")]: currentProof,
              },
              proof: nextProof,
              proofHistory,
              completedChallenges,
              currentStaxBalance: Number(account.currentStaxBalance || 0) + completionReward,
              totalStaxEarned: Number(account.totalStaxEarned || 0) + completionReward,
              activeChallengeTitle: nextGauntlet.title || account.activeChallengeTitle || "No active challenge",
              activeChallengeStatus: "Completed",
              streakLength: Number(nextGauntlet.completedDays || 0),
              lastProofAt: currentProof.loggedAt || account.lastProofAt || "",
              updatedAt: now,
            };
          }
        }
      } else {
        nextGauntlet.active = true;
        nextGauntlet.failureReason = "";
      }

      if (gauntletIndex >= 0) {
        gauntlets[gauntletIndex] = nextGauntlet;
      }
    }

    const nextCurrentGauntletId = bundle.currentGauntletId;
    const nextCurrentGauntlet =
      (nextCurrentGauntletId
        ? gauntlets.find((item) => String(item?.id || "") === String(nextCurrentGauntletId))
        : null) || gauntlets[0] || null;
    const reviewedGauntletId = String(currentProof.gauntletId || nextGauntlet?.id || "");
    if (reviewedGauntletId) {
      proofByGauntlet[reviewedGauntletId] = currentProof;
    }
    if (!nextProof && nextCurrentGauntletId && proofByGauntlet[nextCurrentGauntletId]) {
      nextProof = cloneValue(proofByGauntlet[nextCurrentGauntletId]);
    }

    return {
      ...account,
      gauntlets,
      currentGauntletId: nextCurrentGauntlet ? String(nextCurrentGauntlet.id || "") : "",
      gauntlet: nextCurrentGauntlet || nextGauntlet,
      proofByGauntlet,
      proof: nextProof,
      proofHistory,
      completedChallenges,
      activeChallengeTitle: nextCurrentGauntlet?.title || account.activeChallengeTitle || "No active challenge",
      activeChallengeStatus: nextCurrentGauntlet?.completed
        ? "Completed"
        : nextCurrentGauntlet?.failed
          ? "Failed"
          : nextCurrentGauntlet?.pendingProof?.status === "pending"
            ? "Pending approval"
            : nextCurrentGauntlet?.active
              ? "Active"
              : "Not active",
      streakLength: Number(nextCurrentGauntlet?.completedDays || 0),
      lastProofAt: currentProof.loggedAt || account.lastProofAt || "",
      updatedAt: now,
    };
  });

  if (!nextAccount || !reviewedProof) {
    return { ok: false, message: "That proof could not be found." };
  }

  const verification = verifyStoredProofState(usernameKey, proofId, reviewedProof.gauntletId, decision);
  const verifiedAccount = verification.account;
  const verifiedProof = verification.proof;
  const verifiedGauntlet = verification.gauntlet;

  if (!verification.ok || !verifiedAccount || !verifiedProof) {
    return { ok: false, message: "Approval did not save correctly in local storage. Please try again." };
  }

  if (decision === "approved" && verifiedGauntlet) {
    const approvedDay = Number(reviewedProof.dayNumber || 0);
    const approvedProgressSaved = Number(verifiedGauntlet.completedDays || 0) >= approvedDay;
    const pendingProofCleared =
      !verifiedGauntlet.pendingProof || String(verifiedGauntlet.pendingProof?.id || "") !== String(proofId);

    if (!approvedProgressSaved || !pendingProofCleared) {
      return { ok: false, message: "Approval saved, but the gauntlet progress did not update correctly. Please try again." };
    }
  }

  try {
    const rawState = localStorage.getItem(APP_STATE_KEY);
    const parsedState = rawState ? JSON.parse(rawState) : null;
    const currentStateUsernameKey = normalizeUsername(parsedState?.username || "").toLowerCase();
    if (currentStateUsernameKey === usernameKey) {
      localStorage.setItem(
        APP_STATE_KEY,
        JSON.stringify(buildAppStateFromAccount(verifiedAccount, parsedState?.currentGauntletId || verifiedProof.gauntletId || ""))
      );
    }
  } catch (error) {
    // Ignore local storage issues in the local prototype.
  }

  appendAccountActivity(
    usernameKey,
    decision === "approved" ? "Proof approved" : "Proof declined",
    decision === "approved"
      ? `Approved proof for day ${Number(reviewedProof.dayNumber || 0)}.`
      : `Declined proof for day ${Number(reviewedProof.dayNumber || 0)}.`
  );

  syncCurrentStateFromAccount(usernameKey, verifiedAccount);
  setFlashMessage(
    decision === "approved"
      ? `Day ${Number(reviewedProof.dayNumber || 0)} proof was approved.`
      : `Day ${Number(reviewedProof.dayNumber || 0)} proof was declined. Upload a new screenshot now.`,
    decision === "approved" ? "success" : "error"
  );
  return {
    ok: true,
    message:
      decision === "approved"
        ? `Proof for day ${Number(reviewedProof.dayNumber || 0)} is approved.`
        : `Proof for day ${Number(reviewedProof.dayNumber || 0)} was declined.`,
  };
}

function cancelPurchaseForAccount(usernameKey, purchaseId) {
  if (!usernameKey || !purchaseId) {
    return { ok: false, message: "Order cancel request was invalid." };
  }

  const now = new Date().toISOString();
  let canceledPurchase = null;
  let alreadyCanceled = false;

  const nextAccount = updateStoredAccount(usernameKey, (account) => {
    const purchaseHistory = Array.isArray(account.purchaseHistory) ? [...account.purchaseHistory] : [];
    const purchaseIndex = purchaseHistory.findIndex((purchase) => String(purchase?.id || "") === String(purchaseId));

    if (purchaseIndex === -1) {
      return account;
    }

    const currentPurchase = { ...purchaseHistory[purchaseIndex] };
    if (currentPurchase.status === "canceled") {
      alreadyCanceled = true;
      canceledPurchase = currentPurchase;
      return account;
    }

    const refundAmount = Math.max(0, Number(currentPurchase.cost || 0) * Math.max(1, Number(currentPurchase.quantity || 1)));
    currentPurchase.status = "canceled";
    currentPurchase.canceledAt = now;
    currentPurchase.refundedStax = refundAmount;
    purchaseHistory[purchaseIndex] = currentPurchase;
    canceledPurchase = currentPurchase;

    return {
      ...account,
      purchaseHistory,
      currentStaxBalance: Number(account.currentStaxBalance || 0) + refundAmount,
      totalStaxSpent: Math.max(0, Number(account.totalStaxSpent || 0) - refundAmount),
      updatedAt: now,
    };
  });

  if (!nextAccount || !canceledPurchase) {
    return { ok: false, message: "That order could not be found." };
  }

  if (alreadyCanceled) {
    return { ok: false, message: "That order was already canceled." };
  }

  const verifiedAccount = findAccountByUsername(usernameKey);
  const verifiedPurchase = Array.isArray(verifiedAccount?.purchaseHistory)
    ? verifiedAccount.purchaseHistory.find((purchase) => String(purchase?.id || "") === String(purchaseId))
    : null;

  if (!verifiedAccount || !verifiedPurchase || verifiedPurchase.status !== "canceled") {
    return { ok: false, message: "The order cancel did not save correctly. Please try again." };
  }

  appendAccountActivity(
    usernameKey,
    "Order canceled",
    `Canceled ${verifiedPurchase.item || "order"} and returned ${Number(verifiedPurchase.refundedStax || 0)} Stax.`
  );

  try {
    const rawState = localStorage.getItem(APP_STATE_KEY);
    const parsedState = rawState ? JSON.parse(rawState) : null;
    const currentStateUsernameKey = normalizeUsername(parsedState?.username || "").toLowerCase();
    if (currentStateUsernameKey === usernameKey) {
      localStorage.setItem(
        APP_STATE_KEY,
        JSON.stringify(buildAppStateFromAccount(verifiedAccount, parsedState?.currentGauntletId || ""))
      );
    }
  } catch (error) {
    // Ignore local storage issues in the local prototype.
  }

  syncCurrentStateFromAccount(usernameKey, verifiedAccount);
  return {
    ok: true,
    message: `${verifiedPurchase.item || "Order"} was canceled and ${Number(verifiedPurchase.refundedStax || 0)} Stax was returned.`,
  };
}

function getPostLoginDestination(account, mode = "login") {
  if (account?.isAdmin) {
    return "admin.html";
  }

  if (mode === "signup") {
    return "setup.html#setup-step-bank";
  }

  return Number(account?.websiteVisits || 0) > 2 ? "dashboard.html" : "setup.html#setup-step-bank";
}

function trackWebsiteVisit() {
  if (typeof window === "undefined" || !appState.loggedIn) {
    return;
  }

  const usernameKey = getCurrentUsernameKey(appState);
  if (!usernameKey) {
    return;
  }

  try {
    const sessionKey = `${VISIT_SESSION_PREFIX}${usernameKey}`;
    if (sessionStorage.getItem(sessionKey) === "seen") {
      return;
    }

    sessionStorage.setItem(sessionKey, "seen");
  } catch (error) {
    // Ignore session storage issues in the local prototype.
  }

  updateStoredAccount(usernameKey, (account) => {
    const nextVisits = Number(account.websiteVisits || 0) + 1;
    const activity = Array.isArray(account.activity) ? account.activity.slice(0, 14) : [];
    activity.unshift({
      action: "Website visited",
      details: `Opened the website. Total visits: ${nextVisits}.`,
      at: new Date().toISOString(),
    });

    return {
      ...account,
      websiteVisits: nextVisits,
      lastVisitAt: new Date().toISOString(),
      lastSeenAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      activity,
    };
  });
}

function getUsernameSafetyIssue(username) {
  const normalized = normalizeUsername(username).toLowerCase();

  if (normalized.length < 3) {
    return "Username must be at least 3 characters.";
  }

  if (normalized.length > 24) {
    return "Username must be 24 characters or fewer.";
  }

  if (BLOCKED_USERNAME_TERMS.some((term) => normalized.includes(term))) {
    return "That username is not allowed. Please choose a more appropriate username.";
  }

  if (BLOCKED_USERNAME_NAMES.some((name) => normalized.includes(name))) {
    return "That username is not allowed. Please choose a safer name.";
  }

  return "";
}

function formatAdminDate(value) {
  if (!value) {
    return "Not set";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "Not set";
  }

  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function maskPasswordHash(value) {
  const hash = String(value || "");
  if (!hash) {
    return "Not saved";
  }

  if (hash.length <= 16) {
    return hash;
  }

  return `${hash.slice(0, 8)}...${hash.slice(-8)}`;
}

function syncCurrentAccountRecord(state = appState) {
  const usernameKey = getCurrentUsernameKey(state);

  if (!usernameKey) {
    return false;
  }

  const gauntlets = Array.isArray(state.gauntlets) ? state.gauntlets : state.gauntlet ? [state.gauntlet] : [];
  const currentGauntletId = String(state.currentGauntletId || state.gauntlet?.id || gauntlets[0]?.id || "");
  const currentGauntlet =
    gauntlets.find((item) => String(item?.id || "") === currentGauntletId) || state.gauntlet || gauntlets[0] || null;
  const proofByGauntlet =
    state.proofByGauntlet && typeof state.proofByGauntlet === "object" && !Array.isArray(state.proofByGauntlet)
      ? state.proofByGauntlet
      : {};
  if (currentGauntletId && state.proof) {
    proofByGauntlet[currentGauntletId] = state.proof;
  }
  const currentProof = currentGauntletId ? proofByGauntlet[currentGauntletId] || state.proof || null : state.proof || null;

  const savedAccount = updateStoredAccount(usernameKey, (account) => ({
    ...account,
    username: state.username || account.username,
    profileName: state.profileName || account.profileName,
    email: state.email || account.email,
    walletReady: Boolean(state.walletReady),
    gauntlets,
    currentGauntletId: currentGauntlet ? String(currentGauntlet.id || "") : "",
    gauntlet: currentGauntlet || null,
    proofByGauntlet,
    proof: currentProof,
    devilBets: Array.isArray(state.devilBets) ? state.devilBets : [],
    currentStaxBalance: Number(state.staxBalance || 0),
    activeChallengeTitle: currentGauntlet?.title || "No active challenge",
      activeChallengeStatus: currentGauntlet?.completed
        ? "Completed"
        : currentGauntlet?.failed
          ? "Failed"
          : currentGauntlet?.pendingProof?.status === "pending"
            ? "Pending approval"
          : currentGauntlet?.active
            ? "Active"
            : "Not active",
    streakLength: Number(currentGauntlet?.completedDays || 0),
    proofLogsCount: Number(currentProof?.dayNumber || account.proofLogsCount || 0),
    lastProofAt: currentProof?.loggedAt || account.lastProofAt || "",
    lastSeenAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }));

  return Boolean(savedAccount);
}

function incrementCurrentAccountField(fieldName, amount = 1) {
  const usernameKey = getCurrentUsernameKey(appState);

  if (!usernameKey) {
    return;
  }

  updateStoredAccount(usernameKey, (account) => ({
    ...account,
    [fieldName]: Number(account[fieldName] || 0) + amount,
    updatedAt: new Date().toISOString(),
  }));
}

function saveCurrentAccountPurchase(item, cost, shippingAddress) {
  const usernameKey = getCurrentUsernameKey(appState);
  if (!usernameKey) {
    return null;
  }

  return updateStoredAccount(usernameKey, (account) => {
    const purchaseHistory = Array.isArray(account.purchaseHistory) ? account.purchaseHistory.slice(0, 19) : [];
    purchaseHistory.unshift({
      id: `purchase-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      item: String(item || ""),
      cost: Number(cost || 0),
      quantity: 1,
      status: "active",
      shippingAddress: String(shippingAddress || "").trim(),
      payment: null,
      purchasedAt: new Date().toISOString(),
    });

    return {
      ...account,
      shippingAddress: String(shippingAddress || "").trim(),
      purchaseHistory,
      purchasesCount: Number(account.purchasesCount || 0) + 1,
      updatedAt: new Date().toISOString(),
    };
  });
}

function saveCurrentAccountPaymentProfile({ shippingAddress, cardholder, last4, expiry }) {
  const usernameKey = getCurrentUsernameKey(appState);
  if (!usernameKey) {
    return null;
  }

  return updateStoredAccount(usernameKey, (account) => ({
    ...account,
    shippingAddress: String(shippingAddress || "").trim(),
    paymentCardholder: String(cardholder || "").trim(),
    paymentLast4: String(last4 || "").trim(),
    paymentExpiry: String(expiry || "").trim(),
    updatedAt: new Date().toISOString(),
  }));
}

let pendingCheckout = null;

function formatPaymentSummary(payment) {
  if (!payment) {
    return "No payment details saved";
  }

  const cardholder = String(payment.cardholder || "").trim() || "Cardholder";
  const last4 = String(payment.last4 || "").trim() || "0000";
  const expiry = String(payment.expiry || "").trim() || "MM/YY";
  return `${cardholder} | **** ${last4} | ${expiry}`;
}

function formatShippingAddressParts({
  shippingAddressLine1,
  shippingAddressLine2,
  shippingCity,
  shippingState,
  shippingPostalCode,
  shippingCountry,
}) {
  return [
    String(shippingAddressLine1 || "").trim(),
    String(shippingAddressLine2 || "").trim(),
    [String(shippingCity || "").trim(), String(shippingState || "").trim(), String(shippingPostalCode || "").trim()]
      .filter(Boolean)
      .join(", "),
    String(shippingCountry || "").trim().toUpperCase(),
  ]
    .filter(Boolean)
    .join(" | ");
}

function readCheckoutShippingForm() {
  return {
    shippingName: String(checkoutShippingNameInput?.value || "").trim(),
    shippingAddressLine1: String(checkoutShippingAddressLine1Input?.value || "").trim(),
    shippingAddressLine2: String(checkoutShippingAddressLine2Input?.value || "").trim(),
    shippingCity: String(checkoutShippingCityInput?.value || "").trim(),
    shippingState: String(checkoutShippingStateInput?.value || "").trim(),
    shippingPostalCode: String(checkoutShippingPostalCodeInput?.value || "").trim(),
    shippingCountry: String(checkoutShippingCountryInput?.value || "US").trim().toUpperCase(),
  };
}

function openCheckoutModal(item, cost) {
  if (!checkoutModal || !checkoutForm) {
    return false;
  }

  const currentAccount = appState.loggedIn ? findAccountByUsername(getCurrentUsernameKey(appState)) : null;
  pendingCheckout = { item, cost };
  if (checkoutItemName) {
    checkoutItemName.textContent = item;
  }
  if (checkoutItemPrice) {
    checkoutItemPrice.textContent = `${cost} Stax before tax and shipping.`;
  }
  if (checkoutShippingNameInput) {
    checkoutShippingNameInput.value = currentAccount?.profileName || appState.profileName || "";
  }
  if (checkoutShippingAddressLine1Input) {
    checkoutShippingAddressLine1Input.value = currentAccount?.shippingAddress || "";
  }
  if (checkoutShippingAddressLine2Input) {
    checkoutShippingAddressLine2Input.value = "";
  }
  if (checkoutShippingCityInput) {
    checkoutShippingCityInput.value = "";
  }
  if (checkoutShippingStateInput) {
    checkoutShippingStateInput.value = "";
  }
  if (checkoutShippingPostalCodeInput) {
    checkoutShippingPostalCodeInput.value = "";
  }
  if (checkoutShippingCountryInput) {
    checkoutShippingCountryInput.value = "US";
  }
  checkoutModal.classList.remove("hidden");
  checkoutModal.setAttribute("aria-hidden", "false");
  return true;
}

function closeCheckoutModal() {
  pendingCheckout = null;
  if (!checkoutModal) {
    return;
  }

  if (checkoutForm) {
    checkoutForm.reset();
  }

  checkoutModal.classList.add("hidden");
  checkoutModal.setAttribute("aria-hidden", "true");
}

function findAccountByUsername(username) {
  const normalized = normalizeUsername(username).toLowerCase();
  return getAccountDatabase().find((account) => account.usernameKey === normalized) || null;
}

async function hashPassword(password) {
  const value = String(password || "");

  if (typeof window !== "undefined" && window.crypto?.subtle) {
    const buffer = new TextEncoder().encode(value);
    const digest = await window.crypto.subtle.digest("SHA-256", buffer);
    return Array.from(new Uint8Array(digest))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
  }

  return `plain:${value}`;
}

async function registerStoredAccount({ username, password, profileName, email }) {
  const normalized = normalizeUsername(username).toLowerCase();
  const safetyIssue = getUsernameSafetyIssue(normalized);
  const trimmedEmail = String(email || "").trim().toLowerCase();

  if (safetyIssue) {
    return { ok: false, message: safetyIssue };
  }

  if (!trimmedEmail || !isValidEmail(trimmedEmail)) {
    return { ok: false, message: "Enter a valid email before creating your account." };
  }

  if (String(password || "").trim().length < 8) {
    return { ok: false, message: "Password must be at least 8 characters." };
  }

  const accounts = getAccountDatabase();

  if (accounts.some((account) => account.usernameKey === normalized)) {
    return { ok: false, message: "That username is already taken. Please choose another one." };
  }

  if (accounts.some((account) => String(account.email || "").trim().toLowerCase() === trimmedEmail)) {
    return { ok: false, message: "That email is already connected to another account." };
  }

  const account = {
    usernameKey: normalized,
    username: `@${normalized}`,
    isAdmin: false,
    profileName: profileName || getFirstName(normalized),
    email: trimmedEmail,
    passwordHash: await hashPassword(password),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    walletReady: true,
    betaWelcomeRewardGranted: true,
    currentStaxBalance: BETA_SIGNUP_STAX_REWARD,
    totalStaxEarned: BETA_SIGNUP_STAX_REWARD,
    totalStaxSpent: 0,
    gauntlets: [],
    currentGauntletId: "",
    gauntlet: null,
    proofByGauntlet: {},
    proof: null,
    devilBets: [],
    activeChallengeTitle: "No active challenge",
    activeChallengeStatus: "Not active",
    completedChallenges: 0,
    gauntletsLaunched: 0,
    purchasesCount: 0,
    purchaseHistory: [],
    shippingAddress: "",
    depositsCount: 0,
    loginCount: 0,
    logoutCount: 0,
    websiteVisits: 0,
    streakLength: 0,
    proofLogsCount: 0,
    lastProofAt: "",
    proofHistory: [],
    lastVisitAt: "",
    lastSeenAt: new Date().toISOString(),
    activity: [
      {
        action: "Beta reward added",
        details: `Created account for @${normalized} and added ${BETA_SIGNUP_STAX_REWARD} starter Stax.`,
        at: new Date().toISOString(),
      },
    ],
  };

  accounts.push(account);
  const saved = saveAccountDatabase(accounts);
  if (!saved) {
    return { ok: false, message: "This account could not be saved on this device. Please try again." };
  }
  return { ok: true, account };
}

async function authenticateStoredAccount({ username, password }) {
  const normalized = normalizeUsername(username).toLowerCase();
  const account = findAccountByUsername(username);

  if (!account) {
    return { ok: false, message: "Incorrect username. No account exists with that username." };
  }

  const passwordHash = await hashPassword(password);

  if (account.passwordHash !== passwordHash) {
    return { ok: false, message: "Incorrect password. Please try again." };
  }

  return { ok: true, account };
}

async function resetStoredAccountPassword(username, nextPassword) {
  const normalized = normalizeUsername(username).toLowerCase();

  if (String(nextPassword || "").trim().length < 8) {
    return { ok: false, message: "New password must be at least 8 characters." };
  }

  const account = findAccountByUsername(normalized);
  if (!account) {
    return { ok: false, message: "No saved account exists with that username." };
  }

  const nextHash = await hashPassword(nextPassword);

  updateStoredAccount(normalized, (current) => ({
    ...current,
    passwordHash: nextHash,
    updatedAt: new Date().toISOString(),
  }));

  appendAccountActivity(normalized, "Password reset", "Password was reset from the admin panel.");
  return { ok: true, message: `Password reset for @${normalized}.` };
}

function getApiClient() {
  if (typeof window === "undefined") {
    return null;
  }

  return window.GauntletApi || null;
}

let authConfigPromise = null;

async function getAuthConfig() {
  if (authConfigPromise) {
    return authConfigPromise;
  }

  const apiClient = getApiClient();
  if (!apiClient || typeof apiClient.authConfig !== "function") {
    return null;
  }

  authConfigPromise = apiClient.authConfig().catch(() => null);
  return authConfigPromise;
}

function isApiUnavailableError(error) {
  const message = String(error?.message || error || "");
  return (
    message.includes("Failed to fetch") ||
    message.includes("NetworkError") ||
    message.includes("Load failed") ||
    message.includes("fetch")
  );
}

function buildLocalAccountFromRemoteUser(remoteUser) {
  const normalized = normalizeUsername(remoteUser?.username || "").toLowerCase();
  const existing = normalized ? findAccountByUsername(normalized) : null;

  return {
    usernameKey: normalized,
    username: `@${normalized}`,
    isAdmin: String(remoteUser?.role || "CUSTOMER") === "ADMIN",
    profileName: String(remoteUser?.displayName || "").trim() || existing?.profileName || getFirstName(normalized),
    email: String(remoteUser?.email || "").trim().toLowerCase(),
    passwordHash: existing?.passwordHash || "",
    createdAt: existing?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    walletReady: Boolean(remoteUser?.wallet || existing?.walletReady),
    betaWelcomeRewardGranted: Boolean(existing?.betaWelcomeRewardGranted || Number(remoteUser?.wallet?.staxBalance || 0) >= BETA_SIGNUP_STAX_REWARD),
    currentStaxBalance: Number(remoteUser?.wallet?.staxBalance ?? existing?.currentStaxBalance ?? 0),
    totalStaxEarned: Math.max(Number(existing?.totalStaxEarned || 0), Number(remoteUser?.wallet?.staxBalance || 0)),
    totalStaxSpent: Number(existing?.totalStaxSpent || 0),
    gauntlets: Array.isArray(existing?.gauntlets) ? existing.gauntlets : [],
    currentGauntletId: existing?.currentGauntletId || "",
    gauntlet: existing?.gauntlet || null,
    proofByGauntlet:
      existing?.proofByGauntlet && typeof existing.proofByGauntlet === "object" && !Array.isArray(existing.proofByGauntlet)
        ? existing.proofByGauntlet
        : {},
    proof: existing?.proof || null,
    devilBets: Array.isArray(existing?.devilBets) ? existing.devilBets : [],
    activeChallengeTitle: existing?.activeChallengeTitle || "No active challenge",
    activeChallengeStatus: existing?.activeChallengeStatus || "Not active",
    completedChallenges: Number(existing?.completedChallenges || 0),
    gauntletsLaunched: Number(existing?.gauntletsLaunched || 0),
    purchasesCount: Number(existing?.purchasesCount || 0),
    purchaseHistory: Array.isArray(existing?.purchaseHistory) ? existing.purchaseHistory : [],
    shippingAddress: existing?.shippingAddress || "",
    depositsCount: Number(existing?.depositsCount || 0),
    loginCount: Number(existing?.loginCount || 0),
    logoutCount: Number(existing?.logoutCount || 0),
    websiteVisits: Number(existing?.websiteVisits || 0),
    streakLength: Number(existing?.streakLength || 0),
    proofLogsCount: Number(existing?.proofLogsCount || 0),
    lastProofAt: existing?.lastProofAt || "",
    proofHistory: Array.isArray(existing?.proofHistory) ? existing.proofHistory : [],
    lastVisitAt: existing?.lastVisitAt || "",
    lastSeenAt: new Date().toISOString(),
    activity: Array.isArray(existing?.activity)
      ? existing.activity
      : [
          {
            action: "Account synced",
            details: `Created local app state for @${normalized} from the secure account service.`,
            at: new Date().toISOString(),
          },
        ],
  };
}

function upsertLocalAccountFromRemoteUser(remoteUser) {
  const normalized = normalizeUsername(remoteUser?.username || "").toLowerCase();
  if (!normalized) {
    return null;
  }

  const nextAccount = buildLocalAccountFromRemoteUser(remoteUser);
  const accounts = getAccountDatabase();
  const index = accounts.findIndex((account) => account.usernameKey === normalized);

  if (index === -1) {
    accounts.push(nextAccount);
  } else {
    accounts[index] = {
      ...accounts[index],
      ...nextAccount,
      activity: Array.isArray(accounts[index].activity) ? accounts[index].activity : nextAccount.activity,
      purchaseHistory: Array.isArray(accounts[index].purchaseHistory) ? accounts[index].purchaseHistory : nextAccount.purchaseHistory,
      proofHistory: Array.isArray(accounts[index].proofHistory) ? accounts[index].proofHistory : nextAccount.proofHistory,
      gauntlets: Array.isArray(accounts[index].gauntlets) ? accounts[index].gauntlets : nextAccount.gauntlets,
      devilBets: Array.isArray(accounts[index].devilBets) ? accounts[index].devilBets : nextAccount.devilBets,
    };
  }

  const didSave = saveAccountDatabase(accounts);
  if (!didSave) {
    return null;
  }

  return findAccountByUsername(normalized) || nextAccount;
}

function completeAuthenticatedSession(account, mode = "login", welcomeEmail = null) {
  const bundle = normalizeAccountGauntlets(account);
  const accountProofMap =
    account?.proofByGauntlet && typeof account.proofByGauntlet === "object" && !Array.isArray(account.proofByGauntlet)
      ? JSON.parse(JSON.stringify(account.proofByGauntlet))
      : {};
  const currentProofForGauntlet =
    getLatestAccountProofForGauntlet(account, bundle.currentGauntletId) || (account.proof ? JSON.parse(JSON.stringify(account.proof)) : null);
  if (bundle.currentGauntletId && currentProofForGauntlet) {
    accountProofMap[String(bundle.currentGauntletId)] = currentProofForGauntlet;
  }

  appState.loggedIn = true;
  appState.isAdmin = Boolean(account.isAdmin);
  appState.profileName = account.profileName;
  appState.username = account.username;
  appState.email = account.email;
  appState.staxBalance = Number(account.currentStaxBalance || 0);
  appState.walletReady = Boolean(account.walletReady);
  appState.gauntlets = bundle.gauntlets;
  appState.currentGauntletId = bundle.currentGauntletId;
  appState.gauntlet = bundle.currentGauntlet;
  appState.proofByGauntlet = accountProofMap;
  appState.proof = currentProofForGauntlet;
  appState.devilBets = Array.isArray(account.devilBets) ? JSON.parse(JSON.stringify(account.devilBets)) : [];
  const didSave = saveAppState(appState);
  if (!didSave) {
    return { ok: false, message: "Your account could not be saved on this device. Please try again." };
  }

  incrementCurrentAccountField("loginCount", 1);
  appendAccountActivity(account.usernameKey, mode === "signup" ? "Signed up" : "Logged in", `Opened setup as ${account.username}.`);
  if (mode === "signup" && !account.betaWelcomeSeenAt) {
    setBetaWelcomeEvent({
      usernameKey: account.usernameKey,
      reward: BETA_SIGNUP_STAX_REWARD,
      at: new Date().toISOString(),
    });
    updateStoredAccount(account.usernameKey, (current) => ({
      ...current,
      betaWelcomeSeenAt: new Date().toISOString(),
      betaWelcomeRewardGranted: true,
      updatedAt: new Date().toISOString(),
    }));
  }
  syncDashboardUI();
  syncSocialUI();
  syncAuthUI();

  const destinationLabel = mode === "signup" ? "setup" : Number(account.websiteVisits || 0) > 2 ? "dashboard" : "setup";
  if (authStatus) {
    authStatus.textContent =
      mode === "signup"
        ? `Account created for ${account.username}. Sending you to setup now.`
        : `Logged in as ${account.username}. Sending you to ${destinationLabel} now.`;
  }

  const destination = getPostLoginDestination(account, mode);
  const emailMessage =
    welcomeEmail?.sent
      ? ` Welcome email sent to ${account.email}.`
      : welcomeEmail && !welcomeEmail.skipped
        ? ` Email did not send: ${welcomeEmail.emailError || "Resend did not accept the message."}`
        : "";
  setFlashMessage(
    (mode === "signup"
      ? `Account created for ${account.username}. Opening setup.`
      : destination === "dashboard.html"
        ? `Logged in as ${account.username}. Opening your dashboard.`
        : `Logged in as ${account.username}. Opening setup.`) + emailMessage
  );
  queueSetupConfetti();

  refreshCurrentAccountFromApi()
    .then(() => {
      syncWalletUI();
      syncDashboardUI();
      syncProofLogUI();
    })
    .catch(() => null);

  if (typeof window !== "undefined") {
    window.location.href = destination;
  }

  return { ok: true };
}

async function handleGoogleSignInCredential(idToken) {
  if (!idToken) {
    if (authStatus) {
      authStatus.textContent = "Google sign-in could not be verified. Please try again.";
    }
    showToast("Google sign-in could not be verified.", "error");
    return;
  }

  if (!hasAcceptedTerms()) {
    showTermsAcceptanceModalIfNeeded();
    if (authStatus) {
      authStatus.textContent = "Please accept the terms before continuing.";
    }
    showToast("Please accept the terms before continuing.", "error");
    return;
  }

  const apiClient = getApiClient();
  if (!apiClient || typeof apiClient.loginWithGoogle !== "function") {
    if (authStatus) {
      authStatus.textContent = "Google sign-in is not available right now.";
    }
    showToast("Google sign-in is not available right now.", "error");
    return;
  }

  if (authStatus) {
    authStatus.textContent = "Verifying your Google account...";
  }

  try {
    const remotePayload = await apiClient.loginWithGoogle({ idToken });
    const syncedAccount = upsertLocalAccountFromRemoteUser(remotePayload?.user);
    if (!syncedAccount) {
      if (authStatus) {
        authStatus.textContent = "Google sign-in worked, but this device could not prepare local app state.";
      }
      showToast("Google sign-in worked, but local app state could not be prepared.", "error");
      return;
    }

    const loginResult = completeAuthenticatedSession(
      syncedAccount,
      remotePayload?.isNewUser ? "signup" : "login",
      remotePayload?.welcomeEmail || null
    );
    if (!loginResult.ok) {
      if (authStatus) {
        authStatus.textContent = loginResult.message;
      }
      showToast(loginResult.message, "error");
      return;
    }
  } catch (error) {
    const message = String(error?.message || "Google sign-in failed.");
    if (authStatus) {
      authStatus.textContent = message;
    }
    showToast(message, "error");
  }
}

async function initializeGoogleSignIn() {
  if (!authGoogleButton || typeof window === "undefined") {
    return;
  }

  const showGoogleFallback = (message = "Google sign-in needs a Google Client ID before it can connect.") => {
    authGoogleButton.innerHTML = `
      <button type="button" id="google-fallback-button" class="ghost-button full-width google-fallback-button">
        Continue with Google
      </button>
    `;
    const fallbackButton = document.getElementById("google-fallback-button");
    fallbackButton?.addEventListener("click", () => {
      if (!hasAcceptedTerms()) {
        showTermsAcceptanceModalIfNeeded();
        if (authStatus) {
          authStatus.textContent = "Please accept the terms before continuing.";
        }
        showToast("Please accept the terms before continuing.", "error");
        return;
      }

      if (authStatus) {
        authStatus.textContent = message;
      }
      showToast(message, "error");
    });
  };

  const apiClient = getApiClient();
  if (!apiClient) {
    showGoogleFallback("Start the local server to use Google sign-in.");
    return;
  }

  const config = await getAuthConfig();
  if (!config?.googleEnabled || !config?.googleClientId) {
    showGoogleFallback();
    if (forgotPasswordStatus && !config?.passwordResetEmailEnabled) {
      forgotPasswordStatus.textContent = "Password reset emails will start working once the email sender is configured.";
    }
    return;
  }

  const renderButton = () => {
    if (!window.google?.accounts?.id) {
      return false;
    }

    authGoogleButton.innerHTML = "";
    window.google.accounts.id.initialize({
      client_id: config.googleClientId,
      callback: (response) => {
        handleGoogleSignInCredential(response?.credential || "");
      },
    });
    window.google.accounts.id.renderButton(authGoogleButton, {
      theme: "outline",
      size: "large",
      text: "signin_with",
      shape: "pill",
      width: 320,
    });
    return true;
  };

  if (renderButton()) {
    return;
  }

  let attempts = 0;
  const retry = window.setInterval(() => {
    attempts += 1;
    if (renderButton() || attempts >= 20) {
      window.clearInterval(retry);
      if (attempts >= 20 && authStatus) {
        authStatus.textContent = "Google sign-in is enabled, but the Google button could not finish loading.";
      }
      if (attempts >= 20) {
        showGoogleFallback("Google sign-in is enabled, but the Google button could not finish loading.");
      }
    }
  }, 300);
}

async function sendForgotPasswordLink() {
  const apiClient = getApiClient();
  if (!apiClient || typeof apiClient.forgotPassword !== "function") {
    if (forgotPasswordStatus) {
      forgotPasswordStatus.textContent = "Password reset is not available right now.";
    }
    showToast("Password reset is not available right now.", "error");
    return;
  }

  const emailValue = authEmail ? authEmail.value.trim() : "";
  if (!isValidEmail(emailValue)) {
    if (forgotPasswordStatus) {
      forgotPasswordStatus.textContent = "Enter a valid email address above before requesting a reset link.";
    }
    showToast("Enter a valid email first.", "error");
    return;
  }

  if (forgotPasswordButton) {
    forgotPasswordButton.disabled = true;
  }

  try {
    const result = await apiClient.forgotPassword({ email: emailValue });
    if (forgotPasswordStatus) {
      forgotPasswordStatus.textContent = result?.message || "If that account exists, a reset email has been sent.";
      if (result?.emailConfigured === false && result?.previewResetUrl && typeof window !== "undefined") {
        const reason = result?.emailError ? ` Resend said: ${result.emailError}` : "";
        forgotPasswordStatus.innerHTML = `Email service did not send the message.${reason} Use this local reset link for now: <a href="${result.previewResetUrl}">Reset password</a>`;
      }
    }
    showToast("Password reset request sent.");
  } catch (error) {
    const message = String(error?.message || "Password reset could not be requested.");
    if (forgotPasswordStatus) {
      forgotPasswordStatus.textContent = message;
    }
    showToast(message, "error");
  } finally {
    if (forgotPasswordButton) {
      forgotPasswordButton.disabled = false;
    }
  }
}

async function submitResetPassword() {
  if (!resetPasswordForm || !resetPasswordInput || !resetPasswordConfirmInput) {
    return;
  }

  const passwordValue = resetPasswordInput.value.trim();
  const confirmValue = resetPasswordConfirmInput.value.trim();
  const token = typeof window !== "undefined"
    ? new URLSearchParams(window.location.search).get("token") || ""
    : "";

  if (!token) {
    if (resetPasswordStatus) {
      resetPasswordStatus.textContent = "This reset link is missing its token. Request a new email from the sign-in page.";
    }
    showToast("Reset link is invalid.", "error");
    return;
  }

  if (!passwordValue || passwordValue.length < 8) {
    if (resetPasswordStatus) {
      resetPasswordStatus.textContent = "Choose a password that is at least 8 characters long.";
    }
    showToast("Password must be at least 8 characters.", "error");
    return;
  }

  if (passwordValue !== confirmValue) {
    if (resetPasswordStatus) {
      resetPasswordStatus.textContent = "The password confirmation does not match.";
    }
    showToast("Passwords do not match.", "error");
    return;
  }

  const apiClient = getApiClient();
  if (!apiClient || typeof apiClient.resetPassword !== "function") {
    if (resetPasswordStatus) {
      resetPasswordStatus.textContent = "Password reset is not available right now.";
    }
    showToast("Password reset is not available right now.", "error");
    return;
  }

  if (resetPasswordButton) {
    resetPasswordButton.disabled = true;
  }

  try {
    const result = await apiClient.resetPassword({
      token,
      password: passwordValue,
    });
    if (resetPasswordStatus) {
      resetPasswordStatus.textContent = result?.message || "Password updated successfully. Redirecting to sign in...";
    }
    showToast("Password updated successfully.");
    if (typeof window !== "undefined") {
      window.setTimeout(() => {
        window.location.href = "auth.html";
      }, 1400);
    }
  } catch (error) {
    const message = String(error?.message || "Password could not be updated.");
    if (resetPasswordStatus) {
      resetPasswordStatus.textContent = message;
    }
    showToast(message, "error");
  } finally {
    if (resetPasswordButton) {
      resetPasswordButton.disabled = false;
    }
  }
}

async function syncWalletBalanceFromApi() {
  const apiClient = getApiClient();
  if (!apiClient || !appState.loggedIn) {
    return { ok: false, message: "API wallet sync not available." };
  }

  const summary = await apiClient.walletSummary();
  const nextBalance = Number(summary?.staxBalance || 0);
  appState.staxBalance = nextBalance;
  appState.walletReady = true;
  saveAppState(appState);
  syncWalletUI();
  syncDashboardUI();
  syncGauntletUI();

  const usernameKey = getCurrentUsernameKey(appState);
  if (usernameKey) {
    updateStoredAccount(usernameKey, (account) => ({
      ...account,
      walletReady: true,
      currentStaxBalance: nextBalance,
      depositsCount: Number(summary?.depositsCount || account.depositsCount || 0),
      updatedAt: new Date().toISOString(),
    }));
  }

  return { ok: true, staxBalance: nextBalance, depositsCount: Number(summary?.depositsCount || 0) };
}

function buildLocalGauntletFromRemoteGoal(goal) {
  const status = String(goal?.status || "ACTIVE").toUpperCase();
  return ensureGauntletId({
    id: String(goal?.id || ""),
    title: String(goal?.title || "Goal"),
    category: String(goal?.category || "Custom"),
    stake: Number(goal?.stakeStax || 0),
    requestedStake: Number(goal?.stakeStax || 0),
    active: status === "ACTIVE" || status === "PENDING_REVIEW",
    fundingPending: false,
    failed: status === "FAILED",
    completed: status === "COMPLETED",
    completedDays: Number(goal?.completedDays || 0),
    totalDays: Number(goal?.totalDays || 30),
    proofSchedule: normalizeProofSchedule(goal?.proofSchedule || "daily"),
    startDate: goal?.createdAt || new Date().toISOString(),
    lastLoggedDate: goal?.lastProofAt || null,
    lastProofCalendarDate: goal?.lastProofAt || null,
    pendingProof: null,
    failureReason: "",
    accountCompletionTracked: status === "COMPLETED",
    completionReward: Number(goal?.projectedRewardStax || 0),
    completedAt: status === "COMPLETED" ? goal?.updatedAt || goal?.lastProofAt || goal?.createdAt || new Date().toISOString() : "",
    deadline: goal?.deadlineAt || new Date(Date.now() + Number(goal?.totalDays || 30) * 24 * 60 * 60 * 1000).toISOString(),
  });
}

function normalizeRemoteProofStatus(status) {
  const normalized = String(status || "SUBMITTED").toUpperCase();
  if (normalized === "APPROVED") {
    return "approved";
  }
  if (normalized === "DECLINED") {
    return "declined";
  }

  return "pending";
}

function buildLocalProofFromRemoteProof(proof, fallback = {}) {
  const status = normalizeRemoteProofStatus(proof?.status);
  const assetUrl = String(proof?.assetUrl || "");
  const gauntletId = String(proof?.goalId || fallback.gauntletId || "");

  return {
    id: String(proof?.id || fallback.id || `proof-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`),
    gauntletId,
    task: String(fallback.task || proof?.goal?.title || "Daily proof"),
    result: String(fallback.result || ""),
    time: String(fallback.time || ""),
    note: String(proof?.note || fallback.note || ""),
    source: "Screenshot proof",
    fileName: String(fallback.fileName || (assetUrl.startsWith("data:image/") ? "proof-upload.jpg" : "Proof upload")),
    imageData: assetUrl.startsWith("data:image/") ? assetUrl : "",
    assetUrl,
    loggedAt: proof?.createdAt || fallback.loggedAt || new Date().toISOString(),
    dayNumber: Number(proof?.dayNumber || fallback.dayNumber || 1),
    calendarDate: fallback.calendarDate || startOfDay(proof?.createdAt || new Date()).toISOString(),
    status,
    reviewDecision: status === "pending" ? "" : status,
    reviewedAt: proof?.reviewedAt || fallback.reviewedAt || "",
  };
}

function buildActivityFromRemoteUser(remoteUser, remoteGoals, remoteProofs, purchaseHistory) {
  const ledgerEntries = Array.isArray(remoteUser?.wallet?.ledgerEntries) ? remoteUser.wallet.ledgerEntries : [];
  const ledgerActivity = ledgerEntries.map((entry) => ({
    action: String(entry?.type || "Account update")
      .toLowerCase()
      .replace(/_/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase()),
    details: String(entry?.description || "Account balance updated."),
    at: entry?.createdAt || new Date().toISOString(),
  }));
  const proofActivity = remoteProofs.slice(0, 6).map((proof) => ({
    action:
      proof.status === "approved"
        ? "Proof approved"
        : proof.status === "declined"
          ? "Proof declined"
          : "Proof submitted",
    details: `Day ${Number(proof.dayNumber || 0)} for ${proof.task || "your goal"}.`,
    at: proof.loggedAt || new Date().toISOString(),
  }));
  const goalActivity = remoteGoals.slice(0, 6).map((goal) => ({
    action: goal.completed ? "Goal completed" : goal.failed ? "Goal failed" : "Goal created",
    details: `${goal.title || "Goal"} for ${Number(goal.stake || 0)} Stax.`,
    at: goal.startDate || new Date().toISOString(),
  }));
  const orderActivity = purchaseHistory.slice(0, 6).map((order) => ({
    action: order.status === "canceled" ? "Order canceled" : "Shop purchase",
    details:
      order.status === "canceled"
        ? `${order.item || "Order"} was canceled and refunded.`
        : `Purchased ${order.item || "item"} x${Number(order.quantity || 1)}.`,
    at: order.purchasedAt || new Date().toISOString(),
  }));

  return [...ledgerActivity, ...proofActivity, ...goalActivity, ...orderActivity]
    .sort((a, b) => new Date(b.at || 0).getTime() - new Date(a.at || 0).getTime())
    .slice(0, 14);
}

function buildLocalAccountSnapshotFromRemoteUser(remoteUser) {
  const baseAccount = buildLocalAccountFromRemoteUser(remoteUser);
  const existing = findAccountByUsername(baseAccount.usernameKey);
  const remoteGoals = Array.isArray(remoteUser?.goals) ? remoteUser.goals.map((goal) => buildLocalGauntletFromRemoteGoal(goal)) : [];
  const currentGauntlet =
    remoteGoals.find((goal) => goal.active && !goal.completed && !goal.failed) ||
    remoteGoals.find((goal) => goal.pendingProof) ||
    remoteGoals[0] ||
    null;
  const remoteProofs = Array.isArray(remoteUser?.proofs)
    ? remoteUser.proofs.map((proof) =>
        buildLocalProofFromRemoteProof(proof, {
          task: proof?.goal?.title || "Daily proof",
          gauntletId: proof?.goalId || "",
        })
      )
    : [];
  const proofByGauntlet = Object.fromEntries(
    remoteProofs
      .filter((proof) => proof.gauntletId)
      .map((proof) => [String(proof.gauntletId), proof])
  );

  remoteGoals.forEach((goal) => {
    const linkedProof = proofByGauntlet[String(goal.id || "")] || null;
    if (linkedProof && linkedProof.status === "pending") {
      goal.pendingProof = {
        id: linkedProof.id,
        dayNumber: Number(linkedProof.dayNumber || 1),
        status: "pending",
        calendarDate: linkedProof.calendarDate,
        submittedAt: linkedProof.loggedAt,
        gauntletId: String(goal.id || ""),
      };
    }
  });

  const activeGoalTitle = currentGauntlet?.title || "No active challenge";
  const activeGoalStatus = currentGauntlet
    ? currentGauntlet.failed
      ? "Failed"
      : currentGauntlet.completed
        ? "Completed"
        : currentGauntlet.pendingProof
          ? "Pending review"
          : "Active"
    : "Not active";
  const purchaseHistory = Array.isArray(remoteUser?.orders)
    ? remoteUser.orders.map((order) => ({
        id: String(order?.id || ""),
        item: String(order?.itemName || "Unknown item"),
        cost: Number(order?.staxCost || 0),
        quantity: Number(order?.quantity || 1),
        shippingAddress: [
          order?.shippingName,
          order?.shippingAddressLine1,
          order?.shippingAddressLine2,
          order?.shippingCity,
          order?.shippingState,
          order?.shippingPostalCode,
          order?.shippingCountry,
        ]
          .filter(Boolean)
          .join(", "),
        payment: "Stax wallet",
        purchasedAt: order?.createdAt || "",
        status: String(order?.status || "PENDING").toUpperCase() === "CANCELED" ? "canceled" : "active",
        refundedStax: String(order?.status || "PENDING").toUpperCase() === "CANCELED"
          ? Number(order?.staxCost || 0) * Math.max(1, Number(order?.quantity || 1))
          : 0,
        canceledAt: String(order?.status || "PENDING").toUpperCase() === "CANCELED" ? order?.updatedAt || "" : "",
      }))
    : [];
  const totalSpentOnGoals = remoteGoals.reduce((sum, goal) => sum + Number(goal?.stake || 0), 0);
  const totalSpentOnOrders = purchaseHistory
    .filter((order) => order.status !== "canceled")
    .reduce((sum, order) => sum + Number(order.cost || 0) * Math.max(1, Number(order.quantity || 1)), 0);
  const generatedActivity = buildActivityFromRemoteUser(remoteUser, remoteGoals, remoteProofs, purchaseHistory);

  return {
    ...baseAccount,
    usernameKey: baseAccount.usernameKey,
    username: baseAccount.username,
    isAdmin: String(remoteUser?.role || "CUSTOMER") === "ADMIN",
    profileName: String(remoteUser?.displayName || "").trim() || baseAccount.profileName,
    email: String(remoteUser?.email || "").trim().toLowerCase(),
    currentStaxBalance: Number(remoteUser?.wallet?.staxBalance || 0),
    walletReady: true,
    totalStaxEarned: Math.max(Number(existing?.totalStaxEarned || 0), Number(remoteUser?.wallet?.staxBalance || 0) + totalSpentOnOrders),
    totalStaxSpent: totalSpentOnGoals + totalSpentOnOrders,
    gauntlets: remoteGoals,
    currentGauntletId: String(currentGauntlet?.id || ""),
    gauntlet: currentGauntlet,
    proofByGauntlet,
    proof: currentGauntlet ? proofByGauntlet[String(currentGauntlet.id || "")] || null : null,
    activeChallengeTitle: activeGoalTitle,
    activeChallengeStatus: activeGoalStatus,
    completedChallenges: remoteGoals.filter((goal) => goal.completed).length,
    gauntletsLaunched: remoteGoals.length,
    purchasesCount: purchaseHistory.length,
    purchaseHistory,
    shippingAddress: purchaseHistory[0]?.shippingAddress || existing?.shippingAddress || "",
    depositsCount: Array.isArray(remoteUser?.deposits) ? remoteUser.deposits.length : Number(existing?.depositsCount || 0),
    proofLogsCount: remoteProofs.length,
    lastProofAt: remoteProofs[0]?.loggedAt || "",
    proofHistory: remoteProofs,
    createdAt: remoteUser?.createdAt || existing?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    lastSeenAt: new Date().toISOString(),
    activity: generatedActivity.length ? generatedActivity : Array.isArray(existing?.activity) ? existing.activity : baseAccount.activity,
  };
}

function upsertLocalAccountSnapshot(nextAccount) {
  if (!nextAccount?.usernameKey) {
    return null;
  }

  const accounts = getAccountDatabase();
  const index = accounts.findIndex((account) => account.usernameKey === nextAccount.usernameKey);
  if (index === -1) {
    accounts.push(nextAccount);
  } else {
    accounts[index] = {
      ...accounts[index],
      ...nextAccount,
    };
  }

  if (!saveAccountDatabase(accounts)) {
    return null;
  }

  const saved = findAccountByUsername(nextAccount.usernameKey) || nextAccount;
  syncCurrentStateFromAccount(nextAccount.usernameKey, saved);
  return saved;
}

async function refreshAdminAccountsFromApi() {
  const apiClient = getApiClient();
  if (!apiClient || !appState.loggedIn || !appState.isAdmin) {
    return { ok: false, message: "Remote admin sync is not available." };
  }

  const payload = await apiClient.listAdminUsers();
  const remoteUsers = Array.isArray(payload?.users) ? payload.users : [];
  remoteUsers.forEach((remoteUser) => {
    const snapshot = buildLocalAccountSnapshotFromRemoteUser(remoteUser);
    upsertLocalAccountSnapshot(snapshot);
  });

  return { ok: true, count: remoteUsers.length };
}

async function fetchCurrentAccountSnapshotFromApi() {
  const apiClient = getApiClient();
  if (!apiClient) {
    return null;
  }

  const snapshotPayload = await apiClient.accountSnapshot();
  const remoteUser = snapshotPayload?.user;
  if (!remoteUser) {
    return null;
  }

  return buildLocalAccountSnapshotFromRemoteUser(remoteUser);
}

async function refreshCurrentAccountFromApi() {
  const previousAccount = appState.loggedIn ? findAccountByUsername(getCurrentUsernameKey(appState)) : null;
  const nextAccount = await fetchCurrentAccountSnapshotFromApi();
  if (!nextAccount) {
    return { ok: false, message: "Remote account sync is not available." };
  }

  if (previousAccount) {
    const previousGauntlets = Array.isArray(previousAccount.gauntlets) ? previousAccount.gauntlets : [];
    const nextGauntlets = Array.isArray(nextAccount.gauntlets) ? nextAccount.gauntlets : [];
    nextGauntlets.forEach((gauntlet) => {
      const previousMatch = previousGauntlets.find((item) => String(item?.id || "") === String(gauntlet?.id || ""));
      if (!gauntlet?.completed || previousMatch?.completed || isExpiredCompletedGauntlet(gauntlet)) {
        return;
      }

      setCompletionEvent({
        usernameKey: nextAccount.usernameKey,
        gauntletId: String(gauntlet.id || ""),
        title: gauntlet.title || "Gauntlet",
        reward: Number(gauntlet.completionReward || getCompletionRewardValue(gauntlet) || 0),
        at: gauntlet.completedAt || new Date().toISOString(),
      });
    });
  }

  const saved = upsertLocalAccountSnapshot(nextAccount);
  if (!saved) {
    return { ok: false, message: "Could not save the synced account locally." };
  }

  refreshAppStateFromStorage();
  return { ok: true, account: saved };
}

async function restoreAuthenticatedSessionFromApi() {
  const apiClient = getApiClient();
  if (!apiClient) {
    return { ok: false, reason: "api_unavailable" };
  }

  try {
    const nextAccount = await fetchCurrentAccountSnapshotFromApi();
    if (!nextAccount) {
      return { ok: false, reason: "no_snapshot" };
    }

    const saved = upsertLocalAccountSnapshot(nextAccount);
    if (!saved) {
      return { ok: false, reason: "save_failed" };
    }

    appState = buildAppStateFromAccount(saved, saved.currentGauntletId);
    saveAppState(appState);
    return { ok: true, account: saved };
  } catch (error) {
    if (isApiUnavailableError(error)) {
      return { ok: false, reason: "api_unavailable" };
    }

    return { ok: false, reason: "session_missing" };
  }
}

async function createRemoteGoal({
  title,
  category,
  totalDays,
  proofSchedule = "daily",
  stakeStax,
}) {
  const apiClient = getApiClient();
  if (!apiClient || !appState.loggedIn) {
    return { ok: false, message: "Remote goal creation is not available." };
  }

  const payload = await apiClient.createGoal({
    title,
    category,
    totalDays,
    proofSchedule: normalizeProofSchedule(proofSchedule),
    stakeStax,
  });

  const nextGauntlet = buildLocalGauntletFromRemoteGoal(payload?.goal);
  nextGauntlet.proofSchedule = normalizeProofSchedule(proofSchedule);
  updateGauntletInList(nextGauntlet);
  incrementCurrentAccountField("gauntletsLaunched", 1);
  incrementCurrentAccountField("totalStaxSpent", stakeStax);
  await refreshCurrentAccountFromApi().catch(() => syncWalletBalanceFromApi().catch(() => null));
  saveAppState(appState);

  return { ok: true, goal: payload?.goal, gauntlet: nextGauntlet };
}

async function submitRemoteProof({
  goalId,
  dayNumber,
  note,
  assetUrl,
  fileName,
  task,
}) {
  const apiClient = getApiClient();
  if (!apiClient || !appState.loggedIn) {
    return { ok: false, message: "Remote proof submission is not available." };
  }

  const payload = await apiClient.submitProof({
    goalId,
    dayNumber,
    note,
    assetUrl,
  });

  await refreshCurrentAccountFromApi().catch(() => null);

  return {
    ok: true,
    proof: buildLocalProofFromRemoteProof(payload?.proof, {
      gauntletId: goalId,
      dayNumber,
      note,
      fileName,
      task,
      calendarDate: startOfDay(new Date()).toISOString(),
    }),
  };
}

async function beginRemoteDepositCheckout(deposit) {
  const apiClient = getApiClient();
  if (!apiClient || !appState.loggedIn) {
    return { ok: false, message: "Remote checkout is not available." };
  }

  const payload = await apiClient.createDepositCheckoutSession({
    amountUsd: deposit,
  });

  try {
    sessionStorage.setItem(
      "gauntlet-pending-deposit",
      JSON.stringify({
        amountUsd: deposit,
        staxGranted: Number(payload?.staxGranted || 0),
        startedAt: new Date().toISOString(),
      })
    );
  } catch (error) {
    // Ignore session storage issues in the local prototype.
  }

  if (payload?.checkoutUrl && typeof window !== "undefined") {
    window.location.href = payload.checkoutUrl;
    return { ok: true };
  }

  return { ok: false, message: "Checkout session was created, but no redirect URL was returned." };
}

async function handleBankCheckoutReturn() {
  if (typeof window === "undefined") {
    return;
  }

  const path = window.location.pathname.toLowerCase();
  if (!path.endsWith("/bank.html") && !path.endsWith("bank.html")) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const depositStatus = params.get("deposit");
  if (!depositStatus) {
    return;
  }

  let pendingDeposit = null;
  try {
    const raw = sessionStorage.getItem("gauntlet-pending-deposit");
    pendingDeposit = raw ? JSON.parse(raw) : null;
    sessionStorage.removeItem("gauntlet-pending-deposit");
  } catch (error) {
    pendingDeposit = null;
  }

  if (depositStatus === "success") {
    try {
      const syncResult = await refreshCurrentAccountFromApi();
      if (syncResult.ok) {
        if (bankStatus) {
          bankStatus.textContent = pendingDeposit?.staxGranted
            ? `Payment completed. ${Number(pendingDeposit.staxGranted)} Stax has been added to your balance.`
            : "Payment completed. Your account balance has been refreshed.";
        }
        showToast("Payment completed and wallet updated.");
      }
    } catch (error) {
      if (bankStatus) {
        bankStatus.textContent = "Payment completed. Your balance will refresh after payment confirmation is received.";
      }
      showToast("Payment received. Wallet refresh is pending confirmation.");
    }
  } else if (depositStatus === "cancelled") {
    if (bankStatus) {
      bankStatus.textContent = "Deposit checkout was canceled. No funds were added.";
    }
    showToast("Deposit checkout canceled.", "error");
  }

  window.history.replaceState({}, document.title, "bank.html");
}

async function submitAuth(mode = "login") {
  if (submitAuth.inFlight) {
    return;
  }

  const usernameValue = authUsername ? authUsername.value.trim() : "";
  const emailValue = authEmail ? authEmail.value.trim() : "";
  const passwordValue = authPassword ? authPassword.value.trim() : "";

  if (!usernameValue || !passwordValue) {
    if (authStatus) {
      authStatus.textContent = "Enter both a username and password before continuing.";
    }
    showToast("Enter both a username and password.", "error");
    return;
  }

  const normalizedUsername = normalizeUsername(usernameValue);
  submitAuth.inFlight = true;
  if (authLoginButton) {
    authLoginButton.disabled = true;
  }
  if (authSignupButton) {
    authSignupButton.disabled = true;
  }
  try {
    let result;
    const apiClient = getApiClient();
    let usedRemoteAuth = false;

    if (mode === "signup" && !isValidEmail(emailValue)) {
      if (authStatus) {
        authStatus.textContent = "Enter a valid email before creating your account.";
      }
      showToast("Enter a valid email before signing up.", "error");
      return;
    }

    if (!hasAcceptedTerms()) {
      showTermsAcceptanceModalIfNeeded();
      if (authStatus) {
        authStatus.textContent = "Please accept the terms before continuing.";
      }
      showToast("Please accept the terms before continuing.", "error");
      return;
    }

    if (mode === "login" && emailValue && !isValidEmail(emailValue)) {
      if (authStatus) {
        authStatus.textContent = "Enter a valid email or leave the email field blank when logging in.";
      }
      showToast("Enter a valid email or leave it blank.", "error");
      return;
    }

    if (apiClient) {
      try {
        const remotePayload =
          mode === "signup"
            ? await apiClient.register({
                email: emailValue.toLowerCase(),
                username: normalizedUsername,
                displayName: getFirstName(normalizedUsername),
                password: passwordValue,
                acceptedTerms: true,
              })
            : await apiClient.login({
                emailOrUsername: (emailValue || normalizedUsername).toLowerCase(),
                password: passwordValue,
              });
        const syncedAccount = upsertLocalAccountFromRemoteUser(remotePayload?.user);
        if (!syncedAccount) {
          if (authStatus) {
            authStatus.textContent = "Your account was authenticated, but local app state could not be prepared.";
          }
          showToast("Authenticated, but local app state could not be prepared.", "error");
          return;
        }
        result = { ok: true, account: syncedAccount, welcomeEmail: remotePayload?.welcomeEmail || null };
        usedRemoteAuth = true;
      } catch (error) {
        if (!isApiUnavailableError(error)) {
          const message = String(error?.message || "Authentication failed.");
          if (authStatus) {
            authStatus.textContent = message;
          }
          showToast(message, "error");
          return;
        }
      }
    }

    if (!result) {
      if (mode === "signup") {
        result = await registerStoredAccount({
          username: normalizedUsername,
          password: passwordValue,
          profileName: getFirstName(normalizedUsername),
          email: emailValue,
        });
      } else {
        result = await authenticateStoredAccount({
          username: normalizedUsername,
          password: passwordValue,
        });
      }
    }

    if (!result.ok) {
      if (authStatus) {
        authStatus.textContent = result.message;
      }
      showToast(result.message, "error");
      return;
    }

    const account = result.account;
    if (!usedRemoteAuth && mode === "login" && emailValue && String(account.email || "").trim().toLowerCase() !== emailValue.toLowerCase()) {
      if (authStatus) {
        authStatus.textContent = "That email does not match the saved email for this account.";
      }
      showToast("Email does not match this account.", "error");
      return;
    }

    const loginResult = completeAuthenticatedSession(account, mode, result.welcomeEmail || null);
    if (!loginResult.ok) {
      if (authStatus) {
        authStatus.textContent = loginResult.message;
      }
      showToast(loginResult.message, "error");
      return;
    }
  } catch (error) {
    if (authStatus) {
      authStatus.textContent = "Something went wrong while signing in. Please try again.";
    }
    showToast("Authentication failed. Please try again.", "error");
  } finally {
    submitAuth.inFlight = false;
    if (authLoginButton) {
      authLoginButton.disabled = false;
    }
    if (authSignupButton) {
      authSignupButton.disabled = false;
    }
  }
}

function submitEmailLogin() {
  return submitAuth("login");
}

function formatDateLabel(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

function getRewardMultiplier(days) {
  return days < 10 ? 1.05 : 1.08;
}

function getDepositStax(deposit) {
  return Math.floor(deposit / 2);
}

function getProjectedReward(stake, days = 30) {
  return Math.round(stake * getRewardMultiplier(days));
}

function getCompletionRewardValue(gauntlet) {
  const stakeValue = Number(gauntlet?.stake || 0);
  const totalDaysValue = Number(gauntlet?.totalDays || totalDays);
  return Math.max(0, getProjectedReward(stakeValue, totalDaysValue));
}

function formatLengthLabel(days) {
  if (days === 1) return "1 day";
  if (days === 7) return "1 week";
  if (days === 14) return "2 weeks";
  if (days === 30) return "1 month";
  if (days === 60) return "2 months";
  if (days === 90) return "3 months";
  if (days === 180) return "6 months";
  if (days === 365) return "1 year";
  return `${days} days`;
}

function getGoalLengthDays() {
  return Number(goalLengthInput?.value || 180);
}

function getSetupGoalLengthDays() {
  return Number(setupGoalLength?.value || 180);
}

function normalizeProofSchedule(value) {
  return String(value || "daily") === "every-other-day" ? "every-other-day" : "daily";
}

function getProofScheduleLabel(value) {
  return normalizeProofSchedule(value) === "every-other-day" ? "Every other day" : "Every day";
}

function getProofScheduleHint(value) {
  return normalizeProofSchedule(value) === "every-other-day"
    ? "Every other day means proof is required on day 1, day 3, day 5, and so on. Off days do not expire the goal."
    : "Every day means proof is required once per calendar day.";
}

function getGoalProofSchedule() {
  return normalizeProofSchedule(proofScheduleInput?.value || "daily");
}

function getSetupProofSchedule() {
  return normalizeProofSchedule(setupProofSchedule?.value || "daily");
}

function getProofIntervalFor(gauntlet) {
  return normalizeProofSchedule(gauntlet?.proofSchedule) === "every-other-day" ? 2 : 1;
}

function isRequiredProofDay(day, gauntlet) {
  const dayNumber = Number(day || 0);
  if (dayNumber <= 0) {
    return false;
  }

  const interval = getProofIntervalFor(gauntlet);
  return interval === 1 || dayNumber % interval === 1;
}

function getRequiredProofCount(totalDaysValue, proofSchedule = "daily") {
  const total = Math.max(1, Number(totalDaysValue || totalDays));
  const interval = normalizeProofSchedule(proofSchedule) === "every-other-day" ? 2 : 1;
  return Math.ceil(total / interval);
}

function getRequiredProofCountForGauntlet(gauntlet) {
  return getRequiredProofCount(gauntlet?.totalDays || totalDays, gauntlet?.proofSchedule || "daily");
}

function getRequiredProofsThroughDay(day, gauntlet) {
  const totalDaysValue = Math.max(1, Number(gauntlet?.totalDays || totalDays));
  const cappedDay = Math.max(0, Math.min(totalDaysValue, Number(day || 0)));
  let count = 0;

  for (let currentDay = 1; currentDay <= cappedDay; currentDay += 1) {
    if (isRequiredProofDay(currentDay, gauntlet)) {
      count += 1;
    }
  }

  return count;
}

function getApprovedProofCountForGauntlet(gauntlet) {
  return getRequiredProofsThroughDay(Number(gauntlet?.completedDays || 0), gauntlet);
}

function getLastRequiredProofDay(gauntlet) {
  const totalDaysValue = Math.max(1, Number(gauntlet?.totalDays || totalDays));
  for (let day = totalDaysValue; day >= 1; day -= 1) {
    if (isRequiredProofDay(day, gauntlet)) {
      return day;
    }
  }
  return 1;
}

function syncProofScheduleUI() {
  if (proofScheduleHint) {
    proofScheduleHint.textContent = getProofScheduleHint(getGoalProofSchedule());
  }

  if (setupProofScheduleHint) {
    setupProofScheduleHint.textContent = getProofScheduleHint(getSetupProofSchedule());
  }

  if (setupPreviewProofSchedule) {
    setupPreviewProofSchedule.textContent = getProofScheduleLabel(getSetupProofSchedule());
  }
}

function updateGoalRewardHint() {
  if (!goalRewardHint || !stakeInput) {
    return;
  }

  const stake = parseMoney(stakeInput.value);
  const days = getGoalLengthDays();
  const percent = days < 10 ? 5 : 8;
  goalRewardHint.textContent = `A ${formatLengthLabel(days)} gauntlet with ${stake} Stax returns about ${getProjectedReward(stake, days)} Stax if you finish. Bigger Stax locks earn bigger total rewards at ${percent}%.`;
}

function updateSetupRewardHint() {
  if (!setupRewardHint || !setupStake) {
    return;
  }

  const stake = parseMoney(setupStake.value);
  const days = getSetupGoalLengthDays();
  const projected = getProjectedReward(stake, days);
  const percent = days < 10 ? 5 : 8;
  setupRewardHint.textContent = `A ${formatLengthLabel(days)} gauntlet with ${stake} Stax returns about ${projected} Stax if you finish. Bigger Stax locks earn bigger total rewards at ${percent}%.`;

  if (setupPreviewReward) {
    setupPreviewReward.textContent = formatStax(projected);
  }
}

function getLengthNudge(days) {
  if (days >= 365) {
    return "One year is the highest-commitment option and is intended for long-term habit change.";
  }
  if (days >= 180) {
    return "Six months is recommended because longer goal periods typically build stronger habits and improve reward value.";
  }
  if (days >= 90) {
    return "Three months is a strong middle-ground option, while six months generally provides a more durable behavior change.";
  }
  if (days >= 30) {
    return "One month is a solid starting point, while longer goals typically create stronger routines and more meaningful accountability.";
  }
  if (days === 1) {
    return "One day is useful for a trial run, while longer goals are better for building momentum.";
  }
  return "Short goals are easier to start, while longer goals generally provide stronger structure and better reward potential.";
}

function isRunningGoal(category, title) {
  const combined = `${category || ""} ${title || ""}`.toLowerCase();
  return combined.includes("run") || combined.includes("running") || combined.includes("mile");
}

function syncProofRequirementUI() {
  if (!proofRequiredInput || !proofRequiredHint) {
    return;
  }

  const title = goalTitleInput ? goalTitleInput.value : "";
  const category = goalCategoryInput ? goalCategoryInput.value : "";
  const runningGoal = isRunningGoal(category, title);

  proofRequiredInput.innerHTML = "";

  if (runningGoal) {
    proofRequiredInput.innerHTML = `<option selected>Strava only</option>`;
    proofRequiredHint.textContent = "Running goals require Strava proof.";
  } else {
    proofRequiredInput.innerHTML = `<option selected>Screenshot or proof image</option>`;
    proofRequiredHint.textContent = "Non-running goals require a screenshot, timer image, or another proof image.";
  }
}

function startOfDay(dateLike = new Date()) {
  const date = new Date(dateLike);
  date.setHours(0, 0, 0, 0);
  return date;
}

function getGauntletDayInfoFor(gauntlet) {
  const safeGauntlet = gauntlet || null;
  const gauntletCompletedDays = Number(safeGauntlet?.completedDays || 0);
  const approvedRequiredProofs = getApprovedProofCountForGauntlet(safeGauntlet);

  if (!safeGauntlet?.startDate) {
    return {
      todayIndex: 1,
      canLogToday: gauntletCompletedDays === 0 && isRequiredProofDay(1, safeGauntlet),
      alreadyLoggedToday: false,
      pendingReviewToday: false,
      requiredToday: isRequiredProofDay(1, safeGauntlet),
      missedDay: false,
      missedDays: 0,
      approvedRequiredProofs,
      totalRequiredProofs: getRequiredProofCountForGauntlet(safeGauntlet),
      eligibleLateSave: false,
    };
  }

  const startDate = startOfDay(safeGauntlet.startDate);
  const today = startOfDay(new Date());
  const msPerDay = 24 * 60 * 60 * 1000;
  const elapsedDays = Math.max(0, Math.floor((today - startDate) / msPerDay));
  const totalDaysValue = safeGauntlet.totalDays || totalDays;
  const todayIndex = Math.min(totalDaysValue, elapsedDays + 1);
  const requiredToday = isRequiredProofDay(todayIndex, safeGauntlet);
  const alreadyLoggedToday = safeGauntlet.lastProofCalendarDate === today.toISOString();
  const pendingReviewToday =
    safeGauntlet.pendingProof?.status === "pending" &&
    safeGauntlet.pendingProof?.calendarDate === today.toISOString();
  const dueProofsThroughYesterday = getRequiredProofsThroughDay(elapsedDays, safeGauntlet);
  const missedDays = Math.max(0, dueProofsThroughYesterday - approvedRequiredProofs);

  return {
    todayIndex,
    canLogToday: requiredToday && !alreadyLoggedToday && !pendingReviewToday && missedDays === 0,
    alreadyLoggedToday,
    pendingReviewToday,
    requiredToday,
    missedDay: missedDays > 0,
    missedDays,
    approvedRequiredProofs,
    totalRequiredProofs: getRequiredProofCountForGauntlet(safeGauntlet),
    eligibleLateSave: false,
  };
}

function getGauntletDayInfo() {
  return getGauntletDayInfoFor(appState.gauntlet);
}

function getLateSaveFine() {
  const stakeBase = Number(appState.gauntlet?.requestedStake || appState.gauntlet?.stake || 0);
  return Math.max(4, Math.ceil(stakeBase * 0.1));
}

function evaluateGauntletStatus() {
  if (!appState.gauntlet?.active) {
    return;
  }

  const { missedDays } = getGauntletDayInfo();
  const totalDaysValue = appState.gauntlet.totalDays || totalDays;
  const lastRequiredProofDay = getLastRequiredProofDay(appState.gauntlet);

  if (missedDays > 0 && completedDays < totalDaysValue) {
    const lostStake = Number(appState.gauntlet.stake || appState.gauntlet.requestedStake || 0);
    appState.gauntlet.active = false;
    appState.gauntlet.failed = true;
    appState.gauntlet.failureReason = "Missed proof deadline";
    appState.gauntlet.lostStake = lostStake;
    appState.gauntlet.stake = 0;
    appState.gauntlet.pendingProof = null;
    if (!appState.gauntlet.failureNotified) {
      appState.gauntlet.failureNotified = true;
      setFailureEvent({
        usernameKey: getCurrentUsernameKey(appState),
        gauntletId: String(appState.gauntlet.id || ""),
        title: appState.gauntlet.title || "Gauntlet",
        lostStake,
        at: new Date().toISOString(),
      });
    }
    updateGauntletInList(appState.gauntlet);
    saveAppState(appState);
  }

  if (completedDays >= lastRequiredProofDay) {
    appState.gauntlet.active = false;
    appState.gauntlet.completed = true;
    if (!appState.gauntlet.accountCompletionTracked) {
      appState.gauntlet.accountCompletionTracked = true;
      incrementCurrentAccountField("completedChallenges", 1);
      appendAccountActivity(getCurrentUsernameKey(), "Gauntlet completed", `Finished ${appState.gauntlet.title || "the active gauntlet"}.`);
    }
    updateGauntletInList(appState.gauntlet);
    saveAppState(appState);
  }
}

function evaluateAllGauntletsStatus() {
  if (!Array.isArray(appState.gauntlets) || appState.gauntlets.length === 0) {
    return;
  }

  let changed = false;
  const nextGauntlets = appState.gauntlets.map((gauntlet) => {
    if (!gauntlet?.active) {
      return gauntlet;
    }

    const nextGauntlet = { ...gauntlet };
    const { missedDays } = getGauntletDayInfoFor(nextGauntlet);
    const totalDaysValue = Number(nextGauntlet.totalDays || totalDays);
    const lastRequiredProofDay = getLastRequiredProofDay(nextGauntlet);
    const nextCompletedDays = Number(nextGauntlet.completedDays || 0);

    if (missedDays > 0 && nextCompletedDays < totalDaysValue) {
      const lostStake = Number(nextGauntlet.stake || nextGauntlet.requestedStake || 0);
      nextGauntlet.active = false;
      nextGauntlet.failed = true;
      nextGauntlet.failureReason = "Missed proof deadline";
      nextGauntlet.lostStake = lostStake;
      nextGauntlet.stake = 0;
      nextGauntlet.pendingProof = null;
      if (!nextGauntlet.failureNotified) {
        nextGauntlet.failureNotified = true;
        setFailureEvent({
          usernameKey: getCurrentUsernameKey(appState),
          gauntletId: String(nextGauntlet.id || ""),
          title: nextGauntlet.title || "Gauntlet",
          lostStake,
          at: new Date().toISOString(),
        });
      }
      changed = true;
    }

    if (!nextGauntlet.failed && nextCompletedDays >= lastRequiredProofDay) {
      nextGauntlet.active = false;
      nextGauntlet.completed = true;
      if (!nextGauntlet.accountCompletionTracked) {
        nextGauntlet.accountCompletionTracked = true;
        incrementCurrentAccountField("completedChallenges", 1);
        appendAccountActivity(getCurrentUsernameKey(), "Gauntlet completed", `Finished ${nextGauntlet.title || "a gauntlet"}.`);
      }
      changed = true;
    }

    return nextGauntlet;
  });

  if (!changed) {
    return;
  }

  appState.gauntlets = nextGauntlets;
  if (appState.currentGauntletId) {
    const match = nextGauntlets.find((item) => String(item?.id || "") === String(appState.currentGauntletId));
    appState.gauntlet = match || nextGauntlets[0] || null;
  } else {
    appState.gauntlet = nextGauntlets[0] || null;
    appState.currentGauntletId = appState.gauntlet ? String(appState.gauntlet.id || "") : "";
  }
  completedDays =
    appState.gauntlet && Number.isFinite(appState.gauntlet.completedDays) ? Number(appState.gauntlet.completedDays || 0) : 0;
  saveAppState(appState);
}

function syncLateSaveUI() {
  if (!lateSaveCard || !lateSaveStatus) {
    return;
  }

  if (!appState.gauntlet?.active) {
    lateSaveCard.classList.add("hidden");
    return;
  }

  lateSaveCard.classList.remove("hidden");
  lateSaveStatus.textContent = "Every day needs approved proof. If you miss a day or your proof is still not approved by the next day, the gauntlet ends and the locked Stax are lost.";
}

function syncWalletUI() {
  if (walletCurrentStax) {
    walletCurrentStax.value = formatStax(appState.staxBalance);
  }

  if (walletAvailableStax) {
    walletAvailableStax.value = formatStax(appState.staxBalance);
  }

  if (setupWalletBalance) {
    setupWalletBalance.value = formatStax(appState.staxBalance);
  }

  if (shopBalancePill) {
    shopBalancePill.textContent = formatStax(appState.staxBalance);
  }

  if (shopCreditStatus) {
    shopCreditStatus.dataset.balance = String(appState.staxBalance);
    if (!shopCreditStatus.textContent.includes("You bought")) {
      shopCreditStatus.textContent = `You currently have ${appState.staxBalance} Stax ready to spend.`;
    }
  }

  const currentAccount = appState.loggedIn ? findAccountByUsername(getCurrentUsernameKey(appState)) : null;
  if (shopShippingAddress) {
    shopShippingAddress.textContent = currentAccount?.shippingAddress
      ? currentAccount.shippingAddress
      : "Add your address when you buy something and it will stay saved here.";
  }
  if (shopLastPurchase) {
    const latestPurchase = Array.isArray(currentAccount?.purchaseHistory) ? currentAccount.purchaseHistory[0] : null;
    shopLastPurchase.textContent = latestPurchase
      ? `${latestPurchase.item} x${Number(latestPurchase.quantity || 1)} for ${Number(latestPurchase.cost || 0)} Stax on ${formatAdminDate(latestPurchase.purchasedAt)}.`
      : "Your next reward will show here after you buy it.";
  }

  shopBuyButtons.forEach((button) => {
    const cost = Number(button.dataset.cost || 0);
    const canAfford = appState.staxBalance >= cost;
    button.disabled = !canAfford;
    button.textContent = canAfford ? `Buy now` : `Need ${cost} Stax`;
  });

  if (bankWalletBalance) {
    bankWalletBalance.textContent = `You currently have ${appState.staxBalance} Stax in your wallet.`;
  }
}

function syncDashboardUI() {
  if (!dashboardGoal) {
    return;
  }

  const currentAccount = appState.loggedIn ? findAccountByUsername(getCurrentUsernameKey(appState)) : null;
  const completedGauntletsCount = Number(currentAccount?.completedChallenges || 0);
  const statsGauntlets = Array.isArray(currentAccount?.gauntlets)
    ? currentAccount.gauntlets
    : Array.isArray(appState.gauntlets)
      ? appState.gauntlets
      : [];
  const launchedGauntletsCount = Number(currentAccount?.gauntletsLaunched || 0) || statsGauntlets.length;
  const totalEarned = Number(currentAccount?.totalStaxEarned || 0);
  const totalSpent = Number(currentAccount?.totalStaxSpent || 0);
  const totalOrders = Number(currentAccount?.purchasesCount || 0);
  const totalLost = statsGauntlets.reduce((sum, goal) => sum + Number(goal?.failed ? goal?.lostStake || 0 : 0), 0);

  if (dashboardStatsCompleted) {
    dashboardStatsCompleted.textContent = String(completedGauntletsCount);
  }
  if (dashboardStatsLaunched) {
    dashboardStatsLaunched.textContent = String(launchedGauntletsCount);
  }
  if (dashboardStatsEarned) {
    dashboardStatsEarned.textContent = formatStax(totalEarned);
  }
  if (dashboardStatsSpent) {
    dashboardStatsSpent.textContent = formatStax(totalSpent);
  }
  if (dashboardStatsLost) {
    dashboardStatsLost.textContent = formatStax(totalLost);
  }
  if (dashboardStatsOrders) {
    dashboardStatsOrders.textContent = String(totalOrders);
  }
  if (dashboardStatsCopy) {
    dashboardStatsCopy.textContent =
      totalLost > 0
        ? `You have earned ${formatStax(totalEarned)}, spent ${formatStax(totalSpent)}, and lost ${formatStax(totalLost)} across all saved goals.`
        : `You have earned ${formatStax(totalEarned)} and spent ${formatStax(totalSpent)} across every saved goal and reward order.`;
  }

  // Ensure the in-memory current gauntlet pointer matches the selected id.
  if (appState.currentGauntletId && Array.isArray(appState.gauntlets) && appState.gauntlets.length) {
    const selected = appState.gauntlets.find((item) => String(item.id) === String(appState.currentGauntletId));
    if (selected && selected !== appState.gauntlet) {
      appState.gauntlet = selected;
      completedDays = Number(selected.completedDays || 0);
    }
  }

  if (dashboardGoalsList) {
    const currentGoalId = String(appState.currentGauntletId || appState.gauntlet?.id || "");
    const gauntlets = (Array.isArray(appState.gauntlets) ? appState.gauntlets : []).filter(
      (goal) => !shouldHideGauntletFromDashboard(goal, currentGoalId)
    );
    if (!gauntlets.length) {
      dashboardGoalsList.innerHTML = `
        <div class="comment-item">
          <strong>No goals yet</strong>
          <p>Save your first goal and it will show up here.</p>
        </div>
      `;
    } else {
      dashboardGoalsList.innerHTML = gauntlets
        .map((goal) => {
          const totalDaysValue = Number(goal.totalDays || 30);
          const completedValue = Number(goal.completedDays || 0);
          const approvedProofs = getApprovedProofCountForGauntlet(goal);
          const totalRequiredProofs = getRequiredProofCountForGauntlet(goal);
          const status = goal.failed
            ? "Failed"
            : goal.completed
              ? "Completed"
              : goal.pendingProof?.status === "pending"
                ? "Pending"
                : goal.active
                  ? "Active"
                  : "Ready";
          const isCurrent = String(goal.id || "") === String(appState.currentGauntletId || appState.gauntlet?.id || "");
          return `
            <article class="friend-card dashboard-goal-card ${isCurrent ? "active-follow" : ""}">
              <div class="dashboard-goal-top">
                <strong>${goal.title || "Gauntlet"}</strong>
                <span class="status-pill ${goal.failed ? "alt" : goal.pendingProof?.status === "pending" ? "live" : "alt"}">${status}</span>
              </div>
              <p class="supporting-copy">${goal.category || "Custom"} | ${approvedProofs} of ${totalRequiredProofs} proofs approved | ${getProofScheduleLabel(goal.proofSchedule)}</p>
              <button type="button" class="ghost-button dashboard-goal-open" data-goal-open="${String(goal.id || "")}">
                ${isCurrent ? "Viewing now" : "View this goal"}
              </button>
            </article>
          `;
        })
        .join("");
    }
  }

  if (!appState.gauntlet) {
    dashboardGoal.textContent = "No active goal yet";
    dashboardCategory.textContent = "Not set";
    if (dashboardDeadline) {
      dashboardDeadline.textContent = "Not set";
    }
    if (dashboardStreak) {
      dashboardStreak.textContent = "0 days";
    }
    if (dashboardProjectedReward) {
      dashboardProjectedReward.textContent = "0 Stax";
    }
      if (dashboardBankBalance) {
        dashboardBankBalance.textContent = formatStax(appState.staxBalance);
      }
      if (dashboardStaxGain) {
        dashboardStaxGain.textContent = "0 Stax";
      }
      if (dashboardCurrentStax) {
        dashboardCurrentStax.textContent = formatStax(appState.staxBalance);
      }
      if (dashboardCompletedGauntlets) {
        dashboardCompletedGauntlets.textContent = String(completedGauntletsCount);
      }
      if (dashboardLockedStax) {
        dashboardLockedStax.textContent = "0 Stax";
      }
      if (dashboardAvailableStax) {
        dashboardAvailableStax.textContent = formatStax(appState.staxBalance);
      }
      if (dashboardMoneyStatus) {
        dashboardMoneyStatus.textContent = appState.staxBalance > 0 ? "Wallet funded" : "Needs funds";
      }
      if (dashboardBankCopy) {
        dashboardBankCopy.textContent =
          appState.staxBalance > 0
            ? "Your wallet has Stax ready to use for goals, late-save penalties, and rewards."
            : "Add money in Bank to build your Stax balance before you start larger goals.";
      }
    if (dashboardRewardCopy) {
        dashboardRewardCopy.textContent = "Complete every required check-in to unlock your extra Stax reward.";
      }
      if (welcomeCopy) {
        welcomeCopy.textContent = "Set a goal, upload proof, and keep the pressure on every day.";
      }
      if (homeProgressTitle) {
        homeProgressTitle.textContent = "No active challenge yet";
      }
    if (homeProgressStatus) {
      homeProgressStatus.textContent = "Waiting";
    }
    if (homeProgressStreak) {
      homeProgressStreak.textContent = "0 days";
    }
    if (homeProgressCount) {
      homeProgressCount.textContent = "0 of 0 logged";
    }
    if (homeProgressNextStep) {
      homeProgressNextStep.textContent = "Create a goal to begin.";
    }
    if (homeProgressBar) {
      homeProgressBar.style.width = "0%";
    }
    if (homeProofTip) {
      homeProofTip.textContent = "Use the proof upload flow after launching a goal.";
    }
    return;
  }

  const totalDaysValue = appState.gauntlet.totalDays || 30;
  const completedValue = appState.gauntlet.completedDays || 0;
  const approvedProofs = getApprovedProofCountForGauntlet(appState.gauntlet);
  const totalRequiredProofs = getRequiredProofCountForGauntlet(appState.gauntlet);
  const runningGoal = isRunningGoal(appState.gauntlet.category, appState.gauntlet.title);
  completedDays = Number(completedValue || 0);

  dashboardGoal.textContent = appState.gauntlet.title;
  dashboardCategory.textContent = appState.gauntlet.category;
  if (dashboardDeadline) {
    dashboardDeadline.textContent = formatDateLabel(appState.gauntlet.deadline);
  }
  if (dashboardStreak) {
    dashboardStreak.textContent = `${approvedProofs} proofs`;
  }
  if (completionText) {
    completionText.textContent = `${approvedProofs} of ${totalRequiredProofs} proofs approved`;
  }
  if (gauntletPageProgressText) {
    gauntletPageProgressText.textContent = `${approvedProofs} of ${totalRequiredProofs} proofs approved`;
  }
  if (progressBar) {
    progressBar.style.width = `${totalRequiredProofs > 0 ? (approvedProofs / totalRequiredProofs) * 100 : 0}%`;
  }
  if (dashboardProjectedReward) {
    if (appState.gauntlet.failed) {
      dashboardProjectedReward.textContent = "Failed";
    } else {
      dashboardProjectedReward.textContent = formatStax(getProjectedReward(appState.gauntlet.stake || 0, totalDaysValue));
    }
  }
  if (dashboardBankBalance) {
    dashboardBankBalance.textContent = formatStax(appState.staxBalance);
  }
  if (dashboardCurrentStax) {
    dashboardCurrentStax.textContent = formatStax(appState.staxBalance);
  }
  if (dashboardCompletedGauntlets) {
    dashboardCompletedGauntlets.textContent = String(completedGauntletsCount);
  }
  if (dashboardLockedStax) {
    dashboardLockedStax.textContent = appState.gauntlet.failed
      ? "0 Stax"
      : formatStax(Number(appState.gauntlet.stake || 0));
  }
  if (dashboardAvailableStax) {
    dashboardAvailableStax.textContent = formatStax(Math.max(0, appState.staxBalance));
  }
  if (dashboardMoneyStatus) {
    dashboardMoneyStatus.textContent = appState.gauntlet.failed
      ? "Funds lost"
      : appState.gauntlet.pendingProof?.status === "pending"
        ? "Review pending"
        : Number(appState.gauntlet.stake || 0) > 0
          ? "Money locked"
          : "Wallet ready";
  }
  if (dashboardBankCopy) {
    dashboardBankCopy.textContent = appState.gauntlet.failed
      ? `This goal failed. You lost ${formatStax(Number(appState.gauntlet.lostStake || 0))}. Add funds in Bank before launching a new goal.`
      : appState.gauntlet.pendingProof?.status === "pending"
        ? "Today's proof is waiting for admin approval before your next day opens."
        : `You currently have ${formatStax(appState.staxBalance)} available and ${formatStax(Number(appState.gauntlet.stake || 0))} committed to this goal.`;
  }
  if (dashboardStaxGain) {
    const stakeValue = Number(appState.gauntlet.stake || 0);
    const rewardGain = Math.max(0, getProjectedReward(stakeValue, totalDaysValue) - stakeValue);
    dashboardStaxGain.textContent = appState.gauntlet.failed ? "0 Stax" : formatStax(rewardGain);
  }
  if (dashboardRewardCopy) {
    const stakeValue = Number(appState.gauntlet.stake || 0);
    const rewardGain = Math.max(0, getProjectedReward(stakeValue, totalDaysValue) - stakeValue);
    dashboardRewardCopy.textContent = appState.gauntlet.failed
      ? "This goal was not completed successfully, so no additional Stax will be awarded."
      : `Complete this goal to unlock ${rewardGain} additional Stax on top of your committed amount.`;
  }
    if (welcomeCopy) {
      if (appState.gauntlet.failed) {
        welcomeCopy.textContent = "This goal expired because a required proof day was missed. The committed Stax balance was forfeited.";
      } else if (appState.gauntlet.pendingProof?.status === "pending") {
        welcomeCopy.textContent = "Today's proof is pending approval. Once it's approved, your next day unlocks.";
      } else {
        welcomeCopy.textContent = "Maintain consistency, continue submitting proof, and protect your progress.";
      }
    }
    if (homeProgressTitle) {
      homeProgressTitle.textContent = appState.gauntlet.title;
    }
  if (homeProgressStatus) {
    homeProgressStatus.textContent = appState.gauntlet.failed
      ? "Failed"
      : appState.gauntlet.completed
        ? "Completed"
        : appState.gauntlet.pendingProof?.status === "pending"
          ? "Pending approval"
        : appState.gauntlet.active
          ? "Active"
          : "Ready";
  }
  if (homeProgressStreak) {
    homeProgressStreak.textContent = `${approvedProofs} proofs`;
  }
  if (homeProgressCount) {
    homeProgressCount.textContent = `${approvedProofs} of ${totalRequiredProofs} proofs approved`;
  }
  if (homeProgressNextStep) {
    homeProgressNextStep.textContent = appState.gauntlet.failed
      ? "This goal expired. Create a new goal to continue."
      : appState.gauntlet.completed
        ? "This goal is complete. Create another when you are ready."
        : appState.gauntlet.pendingProof?.status === "pending"
          ? "Wait for admin approval before the next day opens."
        : "Submit today's screenshot or photo to maintain progress.";
  }
  if (homeProgressBar) {
    homeProgressBar.style.width = `${(approvedProofs / Math.max(1, totalRequiredProofs)) * 100}%`;
  }
  if (homeProofTip) {
    homeProofTip.textContent = runningGoal
      ? "This goal requires a Strava screenshot or comparable running proof."
      : "This goal requires a screenshot or photo as supporting proof.";
  }
}

function refreshAppStateFromStorage() {
  appState = getAppState();
  pruneExpiredCompletedGauntletSelection();
  completedDays = appState.gauntlet && Number.isFinite(appState.gauntlet.completedDays)
    ? appState.gauntlet.completedDays
    : 0;
  evaluateAllGauntletsStatus();
  syncAuthUI();
  syncGauntletSwitcher();
  syncWalletUI();
  syncDashboardUI();
  syncAdminUI();
  syncGauntletUI();
  syncProofLogUI();
  syncSocialUI();
  updateDevilPreview();
  syncDevilUI();
  syncLateSaveUI();
  syncSetupAccountUI();
  updateBankPreview();
  if (completionText) {
    evaluateGauntletStatus();
    updateProgress();
    renderCalendar();
  }
  handleCompletionEvent();
  handleFailureEvent();
}

function syncAdminUI() {
  if (!adminAccountsBody) {
    return;
  }

  const searchValue = normalizeGoalKey(adminSearchInput?.value || "");
  const accounts = getAccountDatabase();
  const filteredAccounts = accounts.filter((account) => {
    if (!searchValue) {
      return true;
    }

    const haystack = [
      account?.username || "",
      account?.usernameKey || "",
      account?.profileName || "",
      account?.email || "",
    ]
      .map((value) => normalizeGoalKey(value))
      .join(" ");

    return haystack.includes(searchValue);
  });

  if (adminAccountCount) {
    adminAccountCount.textContent = `${filteredAccounts.length} account${filteredAccounts.length === 1 ? "" : "s"}`;
  }

  if (adminAccountTotal) {
    adminAccountTotal.textContent = String(filteredAccounts.length);
  }

  if (adminCurrentUser) {
    adminCurrentUser.textContent = appState.loggedIn ? appState.username : "Not logged in";
  }

  if (adminEmptyState) {
    adminEmptyState.textContent = searchValue
      ? "No saved accounts match this search yet."
      : "No saved accounts yet.";
    adminEmptyState.classList.toggle("hidden", filteredAccounts.length > 0);
  }

  adminAccountsBody.innerHTML = "";

  if (!filteredAccounts.length) {
    adminAccountsBody.innerHTML = `
      <tr>
        <td colspan="9">${searchValue ? "No matching users found." : "No saved accounts yet."}</td>
      </tr>
    `;
    if (adminAccountDetailList) {
      adminAccountDetailList.innerHTML = `
        <div class="comment-item">
          <strong>${searchValue ? "No matching users" : "No account activity yet"}</strong>
          <p>${searchValue ? "Try a different username, name, or email search." : "Create or use an account to see saved details here."}</p>
        </div>
      `;
    }
    return;
  }

  filteredAccounts.forEach((account) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${account.username || "@unknown"}</td>
      <td>${account.profileName || "Unknown"}</td>
      <td>${account.email || "Not set"}</td>
      <td>${Number(account.currentStaxBalance || 0)} Stax</td>
      <td>${account.activeChallengeStatus || "Not active"}</td>
      <td>${Number(account.completedChallenges || 0)}</td>
      <td>${Number(account.websiteVisits || 0)}</td>
      <td>${formatAdminDate(account.lastVisitAt)}</td>
      <td>${formatAdminDate(account.createdAt)}</td>
    `;
    adminAccountsBody.appendChild(row);
  });

  if (adminAccountDetailList) {
    adminAccountDetailList.innerHTML = "";

    filteredAccounts.forEach((account) => {
      const card = document.createElement("article");
      card.className = "comment-item admin-account-card";
      const accountGauntlets = Array.isArray(account.gauntlets)
        ? account.gauntlets
        : account.gauntlet
          ? [account.gauntlet]
          : [];
      const pendingProofs = (Array.isArray(account.proofHistory) ? account.proofHistory : [])
        .filter((proof) => proof.status === "pending")
        .sort((a, b) => new Date(b.loggedAt || 0).getTime() - new Date(a.loggedAt || 0).getTime());
      const activityMarkup = (Array.isArray(account.activity) ? account.activity : [])
        .slice(0, 8)
        .map(
          (item) => `
            <li>
              <strong>${item.action}</strong>
              <span>${item.details || "No extra details."}</span>
              <span>${formatAdminDate(item.at)}</span>
            </li>
          `
        )
        .join("");
      const dedupedPurchases = Array.from(
        new Map(
          (Array.isArray(account.purchaseHistory) ? account.purchaseHistory : []).map((purchase) => [
            String(
              purchase?.id ||
                [
                  purchase?.item || "",
                  purchase?.purchasedAt || "",
                  purchase?.shippingAddress || "",
                  purchase?.cost || 0,
                  purchase?.quantity || 1,
                ].join("|")
            ),
            purchase,
          ])
        ).values()
      );
      const purchaseMarkup = dedupedPurchases
        .sort((a, b) => new Date(b.purchasedAt || 0).getTime() - new Date(a.purchasedAt || 0).getTime())
        .map(
          (purchase) => `
            <li class="admin-purchase-card">
              <div class="admin-purchase-top">
                <strong>${purchase.item || "Unknown item"}</strong>
                <span class="admin-purchase-qty">${Number(purchase.cost || 0)} Stax</span>
              </div>
              <span class="admin-proof-status ${purchase.status === "canceled" ? "declined" : "approved"}">
                ${purchase.status === "canceled" ? "Canceled" : "Active order"}
              </span>
              <span class="admin-purchase-meta">Quantity bought: ${Number(purchase.quantity || 0)}</span>
              <span class="admin-purchase-meta">Order total: ${Number(purchase.cost || 0) * Math.max(1, Number(purchase.quantity || 1))} Stax</span>
              <span class="admin-purchase-meta">Ship to: ${purchase.shippingAddress || "No address saved"}</span>
              <span class="admin-purchase-meta">Payment: ${formatPaymentSummary(purchase.payment)}</span>
              <span class="admin-purchase-meta">Purchased: ${formatAdminDate(purchase.purchasedAt)}</span>
              ${
                purchase.status === "canceled"
                  ? `<span class="admin-purchase-meta">Refunded: ${Number(purchase.refundedStax || 0)} Stax on ${formatAdminDate(purchase.canceledAt)}</span>`
                  : ""
              }
              ${
                purchase.status === "canceled"
                  ? ""
                  : `<div class="admin-proof-actions">
                      <button
                        type="button"
                        class="ghost-button admin-proof-button"
                        data-order-action="cancel"
                        data-username-key="${account.usernameKey}"
                        data-purchase-id="${purchase.id}"
                      >
                        Cancel order
                      </button>
                    </div>`
              }
            </li>
          `
        )
        .join("");
      const pendingProofMarkup = pendingProofs
        .map((proof) => {
          const goalTitle =
            accountGauntlets.find((goal) => String(goal?.id || "") === String(proof.gauntletId || ""))?.title ||
            "Unknown gauntlet";
          return `
            <div class="comment-item admin-pending-proof">
              <strong>${goalTitle} | Day ${Number(proof.dayNumber || 0)} waiting for review</strong>
              <span>${proof.task || "Proof log"}${proof.fileName ? ` | ${proof.fileName}` : ""}</span>
              <span>${proof.note || "No note added."}</span>
              ${proof.imageData ? `<img class="admin-proof-image" src="${proof.imageData}" alt="Pending proof preview" />` : ""}
              <div class="admin-proof-actions">
                <button type="button" class="solid-button admin-proof-button" data-proof-action="approve" data-username-key="${account.usernameKey}" data-proof-id="${proof.id}">Approve</button>
                <button type="button" class="ghost-button admin-proof-button" data-proof-action="decline" data-username-key="${account.usernameKey}" data-proof-id="${proof.id}">Decline</button>
              </div>
            </div>
          `;
        })
        .join("");
      const proofMarkup = (Array.isArray(account.proofHistory) ? account.proofHistory : [])
        .sort((a, b) => new Date(b.loggedAt || 0).getTime() - new Date(a.loggedAt || 0).getTime())
        .map((proof) => {
          const goalTitle =
            accountGauntlets.find((goal) => String(goal?.id || "") === String(proof.gauntletId || ""))?.title ||
            "Unknown gauntlet";
          return `
            <li class="admin-proof-item">
              <strong>${goalTitle} | Day ${Number(proof.dayNumber || 0)}: ${proof.task || "Proof log"}</strong>
              <span class="admin-proof-status ${proof.status || "pending"}">Status: ${proof.status || "pending"}</span>
              <span>${proof.fileName ? `File: ${proof.fileName}` : "Screenshot upload"}</span>
              <span>${proof.note || "No note added."}</span>
              <span>${formatAdminDate(proof.loggedAt)}</span>
              ${proof.reviewedAt ? `<span>Reviewed: ${formatAdminDate(proof.reviewedAt)}</span>` : ""}
              ${proof.imageData ? `<img class="admin-proof-image" src="${proof.imageData}" alt="Saved proof preview" />` : ""}
              ${
                proof.status === "pending"
                  ? `<div class="admin-proof-actions">
                      <button type="button" class="solid-button admin-proof-button" data-proof-action="approve" data-username-key="${account.usernameKey}" data-proof-id="${proof.id}">Approve</button>
                      <button type="button" class="ghost-button admin-proof-button" data-proof-action="decline" data-username-key="${account.usernameKey}" data-proof-id="${proof.id}">Decline</button>
                    </div>`
                  : ""
              }
            </li>
          `;
        })
        .join("");

      card.innerHTML = `
        <div class="admin-account-head">
          <strong>${account.username || "@unknown"}</strong>
          <span class="status-pill alt">${account.activeChallengeStatus || "Not active"}</span>
        </div>
        <div class="admin-stats-grid">
          <div><span class="metric-label">Display name</span><b>${account.profileName || "Unknown"}</b></div>
          <div><span class="metric-label">Email</span><b>${account.email || "Not set"}</b></div>
          <div><span class="metric-label">Current balance</span><b>${Number(account.currentStaxBalance || 0)} Stax</b></div>
          <div><span class="metric-label">Total earned</span><b>${Number(account.totalStaxEarned || 0)} Stax</b></div>
          <div><span class="metric-label">Total spent</span><b>${Number(account.totalStaxSpent || 0)} Stax</b></div>
          <div><span class="metric-label">Challenge</span><b>${account.activeChallengeTitle || "No active challenge"}</b></div>
          <div><span class="metric-label">Gauntlets launched</span><b>${Number(account.gauntletsLaunched || 0)}</b></div>
          <div><span class="metric-label">Completed challenges</span><b>${Number(account.completedChallenges || 0)}</b></div>
          <div><span class="metric-label">Website visits</span><b>${Number(account.websiteVisits || 0)}</b></div>
          <div><span class="metric-label">Purchases</span><b>${dedupedPurchases.length}</b></div>
          <div><span class="metric-label">Shipping address</span><b>${account.shippingAddress || "Not set"}</b></div>
          <div><span class="metric-label">Deposits</span><b>${Number(account.depositsCount || 0)}</b></div>
          <div><span class="metric-label">Logins</span><b>${Number(account.loginCount || 0)}</b></div>
          <div><span class="metric-label">Logouts</span><b>${Number(account.logoutCount || 0)}</b></div>
          <div><span class="metric-label">Streak</span><b>${Number(account.streakLength || 0)} days</b></div>
          <div><span class="metric-label">Proof logs</span><b>${Number(account.proofLogsCount || 0)}</b></div>
          <div><span class="metric-label">Last proof</span><b>${formatAdminDate(account.lastProofAt)}</b></div>
          <div><span class="metric-label">Last visit</span><b>${formatAdminDate(account.lastVisitAt)}</b></div>
          <div><span class="metric-label">Last seen</span><b>${formatAdminDate(account.lastSeenAt)}</b></div>
          <div><span class="metric-label">Created</span><b>${formatAdminDate(account.createdAt)}</b></div>
          <div><span class="metric-label">Updated</span><b>${formatAdminDate(account.updatedAt)}</b></div>
          <div><span class="metric-label">Password hash</span><b>${maskPasswordHash(account.passwordHash)}</b></div>
        </div>
        <div class="admin-activity-block">
          <span class="metric-label">Pending proof review ${pendingProofs.length ? `(${pendingProofs.length})` : ""}</span>
          ${
            pendingProofMarkup
              ? pendingProofMarkup
              : `<div class="comment-item"><strong>No pending proof</strong><p>This account does not have any proof waiting for review right now.</p></div>`
          }
        </div>
        <div class="admin-activity-block">
          <span class="metric-label">Shop purchases</span>
          <ul class="admin-activity-list admin-purchase-list">
            ${purchaseMarkup || "<li class=\"admin-purchase-card\"><strong>No purchases yet</strong><span class=\"admin-purchase-meta\">This account has not bought anything yet.</span><span class=\"admin-purchase-meta\">Quantity bought: 0</span></li>"}
          </ul>
        </div>
        <div class="admin-activity-block">
          <span class="metric-label">Recent activity</span>
          <ul class="admin-activity-list">
            ${activityMarkup || "<li><strong>No activity yet</strong><span>This account has not done anything yet.</span><span>Not set</span></li>"}
          </ul>
        </div>
        <div class="admin-activity-block">
          <span class="metric-label">Saved proof history</span>
          <ul class="admin-activity-list">
            ${proofMarkup || "<li><strong>No proof saved yet</strong><span>This account has not submitted proof yet.</span><span>Not set</span></li>"}
          </ul>
        </div>
      `;
      adminAccountDetailList.appendChild(card);
    });
  }
}

function syncSocialUI() {
  return;
}

function syncSetupAccountUI() {
  if (!setupAccountPill && !setupAccountComplete) {
    return;
  }

  if (appState.loggedIn) {
    if (setupAccountPill) {
      setupAccountPill.textContent = "Done";
    }
    if (setupAccountComplete) {
      setupAccountComplete.classList.remove("hidden");
    }
    if (createAccountStatus) {
      createAccountStatus.textContent = `Signed in as ${appState.username || appState.profileName}. Step 1 is complete.`;
    }
    if (accountDisplayName) {
      accountDisplayName.value = appState.profileName || accountDisplayName.value;
    }
    if (accountUsername) {
      accountUsername.value = appState.username || accountUsername.value;
    }
    if (accountEmail) {
      accountEmail.value = appState.email || accountEmail.value;
    }
    return;
  }

  if (setupAccountPill) {
    setupAccountPill.textContent = "Account";
  }
  if (setupAccountComplete) {
    setupAccountComplete.classList.add("hidden");
  }
}

function updateDevilPreview() {
  if (!devilWager || !devilPreviewWager) {
    return;
  }

  const wager = parseMoney(devilWager.value);
  const commissionAmount = Math.round(wager * 0.10);
  const winAmount = Math.max((wager * 2) - commissionAmount, 0);

  devilPreviewWager.textContent = formatStax(wager);
  devilPreviewCommission.textContent = formatStax(commissionAmount);
  devilPreviewWin.textContent = formatStax(winAmount);
  devilPreviewLose.textContent = `You lose ${wager} Stax`;
}

function syncDevilUI() {
  if (!devilHistory) {
    return;
  }

  if (!appState.devilBets.length) {
    devilHistory.innerHTML = `
      <div class="comment-item">
        <strong>No side-bets yet</strong>
        <p>Place one above and it will appear here.</p>
      </div>
    `;
    return;
  }

  devilHistory.innerHTML = appState.devilBets
    .map(
      (bet) => `
        <div class="comment-item">
          <strong>${bet.friend}</strong>
          <p>${bet.goal}</p>
          <p>Wager: ${bet.wager} Stax. House cut: 10%.</p>
        </div>
      `
    )
    .join("");
}

function syncGauntletUI() {
  if (!gauntletPageTitle) {
    return;
  }

  if (!appState.gauntlet) {
    gauntletPageTitle.textContent = "No goal started yet";
    gauntletPageStatus.textContent = "Waiting";
    gauntletPageCategory.textContent = "None yet";
    gauntletPageStake.textContent = "0 Stax";
    gauntletPageCheckins.textContent = "0";
    if (gauntletPageStreak) {
      gauntletPageStreak.textContent = "0 days";
    }
    gauntletPageWallet.textContent = formatStax(appState.staxBalance);
    gauntletPageProgressText.textContent = "0 proofs approved";
    gauntletPageProgressBar.style.width = "0%";
    if (gauntletLaunchNote) {
      gauntletLaunchNote.textContent = "Start a goal from the main page to begin tracking progress here.";
    }
  } else {
    const totalDaysValue = appState.gauntlet.totalDays || 30;
    const completedValue = appState.gauntlet.completedDays || 0;
    const approvedProofs = getApprovedProofCountForGauntlet(appState.gauntlet);
    const totalRequiredProofs = getRequiredProofCountForGauntlet(appState.gauntlet);
    gauntletPageTitle.textContent = appState.gauntlet.title;
    if (appState.gauntlet.failed) {
      gauntletPageStatus.textContent = "Failed";
    } else if (appState.gauntlet.completed) {
      gauntletPageStatus.textContent = "Completed";
    } else if (appState.gauntlet.pendingProof?.status === "pending") {
      gauntletPageStatus.textContent = "Pending approval";
    } else {
      gauntletPageStatus.textContent = appState.gauntlet.active ? "Active" : "Ready";
    }
    gauntletPageCategory.textContent = appState.gauntlet.category;
    gauntletPageStake.textContent = appState.gauntlet.failed
      ? "0 Stax"
      : formatStax(appState.gauntlet.stake);
    gauntletPageCheckins.textContent = `${approvedProofs} / ${totalRequiredProofs}`;
    if (gauntletPageStreak) {
      gauntletPageStreak.textContent = `${approvedProofs} proofs`;
    }
    gauntletPageWallet.textContent = formatStax(appState.staxBalance);
    gauntletPageProgressText.textContent = `${approvedProofs} of ${totalRequiredProofs} proofs approved`;
    gauntletPageProgressBar.style.width = `${(approvedProofs / Math.max(1, totalRequiredProofs)) * 100}%`;
    if (gauntletLaunchNote) {
      if (appState.gauntlet.fundingPending) {
        gauntletLaunchNote.textContent = "Your goal is saved. You can continue submitting proof from the Proof Log page.";
      } else if (appState.gauntlet.pendingProof?.status === "pending") {
        gauntletLaunchNote.textContent = "Today's proof is pending review. Once it is approved, your next day will unlock.";
      } else if (appState.gauntlet.failed) {
        gauntletLaunchNote.textContent = "This goal expired because a required proof day was missed.";
      } else if (appState.gauntlet.completed) {
        gauntletLaunchNote.textContent = "This goal is complete. Your full tracking history is saved here.";
      } else {
        gauntletLaunchNote.textContent = `This goal is active. Proof schedule: ${getProofScheduleLabel(appState.gauntlet.proofSchedule)}.`;
      }
    }
  }

  if (!appState.proof) {
    gauntletProofTitle.textContent = "No proof submitted yet";
    gauntletProofTask.textContent = "Nothing logged yet.";
    gauntletProofNote.textContent = "Your uploaded notes and proof details will appear here.";
    gauntletProofMedia.classList.remove("hidden");
    gauntletProofImage.classList.add("hidden");
    gauntletProofMedia.innerHTML = "<span>Proof preview</span><strong>Upload a screenshot or photo to see it here</strong>";
  } else {
    gauntletProofTitle.textContent = appState.proof.status === "pending" ? "Proof pending review" : appState.proof.source;
    gauntletProofTask.textContent = appState.proof.task;
    gauntletProofNote.textContent = `${appState.proof.note} ${appState.proof.result ? `Result: ${appState.proof.result}.` : ""} ${appState.proof.time ? `Time: ${appState.proof.time}.` : ""} ${appState.proof.status === "pending" ? "Status: pending review." : appState.proof.status === "approved" ? "Status: approved." : appState.proof.status === "declined" ? "Status: declined." : ""}`.trim();

    if (appState.proof.imageData) {
      gauntletProofImage.src = appState.proof.imageData;
      gauntletProofImage.classList.remove("hidden");
      gauntletProofMedia.classList.add("hidden");
    } else {
      gauntletProofMedia.classList.remove("hidden");
      gauntletProofImage.classList.add("hidden");
      gauntletProofMedia.innerHTML = `<span>Proof source</span><strong>${appState.proof.fileName || appState.proof.source}</strong>`;
    }
  }
}

function syncProofLogUI() {
  if (!proofSummary || !proofNote || !proofTask) {
    return;
  }

  if (!appState.proof) {
    proofSummary.textContent = "No proof submitted yet";
    proofNote.textContent = "Upload your first proof submission to begin tracking progress.";
    proofTask.textContent = "No task logged yet.";
    if (proofSubmitButton) {
      proofSubmitButton.textContent = "Submit today's proof";
    }
    if (proofHelperText) {
      proofHelperText.textContent = "Upload a Strava screenshot, route image, treadmill display, or another image that clearly verifies today's progress.";
    }
    if (proofStatusChip) {
      proofStatusChip.className = "proof-status-chip pending hidden";
      proofStatusChip.textContent = "Pending review";
    }
    return;
  }

  const details = [
    appState.proof.note || "",
  ]
    .filter(Boolean)
    .join(" ");

  proofSummary.textContent = appState.proof.fileName || "Screenshot proof uploaded";
  proofTask.textContent = appState.proof.task || "Proof uploaded";
  if (proofStatusChip) {
    const status = appState.proof.status || "pending";
    proofStatusChip.className = `proof-status-chip ${status}`;
    proofStatusChip.textContent =
      status === "approved"
        ? "Approved"
        : status === "declined"
          ? "Declined"
          : "Pending review";
  }
  if (proofSubmitButton) {
    proofSubmitButton.textContent = appState.proof.status === "declined" ? "Upload a new screenshot" : "Mark today complete";
  }
  if (proofHelperText) {
    proofHelperText.textContent =
      appState.proof.status === "declined"
        ? "Your last proof was declined. Add a new screenshot or proof image now so admin can review it again."
        : "Upload a screenshot or proof image that clearly verifies today's progress.";
  }
  if (photoStatus && appState.proof.status === "declined") {
    photoStatus.textContent = "Your last proof was declined. Please upload a new screenshot for review.";
  }
  proofNote.textContent =
    appState.proof.status === "pending"
      ? `${details ? `${details} ` : ""}Proof is pending review. Once it is approved, your next day will unlock.`
      : appState.proof.status === "approved"
        ? `${details ? `${details} ` : ""}Proof approved. You can move on when the next day opens.`
        : appState.proof.status === "declined"
          ? `${details ? `${details} ` : ""}Proof was declined. Upload a new screenshot before the day ends so the goal does not expire.`
          : details || "Proof saved.";
}

function renderCalendar() {
  const totalDaysValue = appState.gauntlet?.totalDays || totalDays;
  calendarGrid.innerHTML = "";
  const pendingProofDay = Number(appState.gauntlet?.pendingProof?.dayNumber || 0);

  for (let day = 1; day <= totalDaysValue; day += 1) {
    const tile = document.createElement("article");
    const requiredDay = isRequiredProofDay(day, appState.gauntlet);
    const state =
      requiredDay && day <= completedDays
        ? "complete"
        : requiredDay && day === pendingProofDay
          ? "current"
          : requiredDay && day === getGauntletDayInfo().todayIndex
            ? "current"
            : requiredDay
              ? "pending"
              : "rest";

    tile.className = `calendar-day ${state}`;
    tile.innerHTML = `
      <span class="metric-label">Day ${day}</span>
      <h3>${
        !requiredDay
          ? "Off day"
          : day <= completedDays
            ? "Proof approved"
            : day === pendingProofDay
              ? "Pending review"
              : day === getGauntletDayInfo().todayIndex
                ? "Today"
                : "Upcoming"
      }</h3>
      <strong>${
        !requiredDay
          ? "No proof"
          : day <= completedDays
            ? "Approved"
            : day === pendingProofDay
              ? "Pending"
              : day === getGauntletDayInfo().todayIndex
                ? "Log now"
                : "Waiting"
      }</strong>
    `;

    calendarGrid.appendChild(tile);
  }
}

function updateProgress() {
  const totalDaysValue = appState.gauntlet?.totalDays || totalDays;
  const { todayIndex, alreadyLoggedToday, pendingReviewToday, requiredToday, approvedRequiredProofs, totalRequiredProofs } = getGauntletDayInfo();

  completionText.textContent = `${approvedRequiredProofs} of ${totalRequiredProofs} proofs approved`;
  progressBar.style.width = `${(approvedRequiredProofs / Math.max(1, totalRequiredProofs)) * 100}%`;
  if (appState.gauntlet?.failed) {
    dayPill.textContent = "Expired";
  } else if (completedDays >= getLastRequiredProofDay(appState.gauntlet)) {
    dayPill.textContent = "Finished";
  } else if (pendingReviewToday) {
    dayPill.textContent = `Day ${todayIndex} pending`;
  } else if (alreadyLoggedToday) {
    dayPill.textContent = `Day ${todayIndex} complete`;
  } else if (!requiredToday) {
    dayPill.textContent = `Day ${todayIndex} off`;
  } else {
    dayPill.textContent = `Day ${todayIndex}`;
  }
  streakPill.textContent = `${approvedRequiredProofs} complete`;
  if (dashboardStreak) {
    dashboardStreak.textContent = `${approvedRequiredProofs} proofs`;
  }
}

if (logForm) {
  logForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const submitButton = logForm.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.disabled = true;
    }

    try {
      evaluateGauntletStatus();
      const totalDaysValue = appState.gauntlet?.totalDays || totalDays;
      const { canLogToday, todayIndex, alreadyLoggedToday, pendingReviewToday, requiredToday, missedDays } = getGauntletDayInfo();
      const selectedFile = photoInput && photoInput.files ? photoInput.files[0] : null;
      const hasScreenshot = Boolean(selectedFile);

      if (!hasScreenshot) {
        proofNote.textContent = "Add a screenshot or proof image before submitting today's check-in.";
        syncLateSaveUI();
        showToast("Please upload a screenshot before submitting.", "error");
        return;
      }

      if (appState.gauntlet?.failed) {
        proofNote.textContent = "This goal expired because a required day was missed. Create a new goal to continue.";
        updateProgress();
        syncDashboardUI();
        syncGauntletUI();
        showToast("This goal has already expired.", "error");
        return;
      }

      if (!appState.gauntlet) {
        proofNote.textContent = "Save a goal first before logging proof.";
        showToast("Save a goal before logging proof.", "error");
        return;
      }

      if (completedDays >= totalDaysValue || appState.gauntlet?.completed) {
        dayPill.textContent = "Finished";
        showToast("This goal is already complete.", "error");
        return;
      }

      if (!appState.gauntlet.active) {
        appState.gauntlet.active = true;
        appState.gauntlet.fundingPending = false;
        if (!appState.gauntlet.startDate) {
          appState.gauntlet.startDate = new Date().toISOString();
        }
        updateGauntletInList(appState.gauntlet);
      }

      if (missedDays > 0) {
        proofNote.textContent = "A proof day was missed, so this goal has expired.";
        syncLateSaveUI();
        showToast("This goal expired because a required day was missed.", "error");
        return;
      }

      if (!canLogToday) {
        proofNote.textContent = pendingReviewToday
          ? `Day ${todayIndex} is pending review. Wait for approval before uploading again.`
          : alreadyLoggedToday
            ? `Day ${todayIndex} is already approved. Come back tomorrow for the next check-in.`
            : !requiredToday
              ? `Day ${todayIndex} is an off day for this goal. No proof is due today.`
              : "You can only log the current proof day of this goal.";
        updateProgress();
        showToast(
          pendingReviewToday
            ? "Today's proof is still waiting for approval."
            : alreadyLoggedToday
              ? "Today's proof is already approved. Come back tomorrow."
              : !requiredToday
                ? "No proof is due today for this goal."
                : "You can only log the current proof day.",
          "error"
        );
        return;
      }

      const calendarDate = startOfDay(new Date()).toISOString();
      const imageData = await readFileAsDataUrl(selectedFile);
      if (!imageData) {
        proofNote.textContent = "That screenshot could not be prepared for local save. Try a smaller image.";
        showToast("Screenshot could not be saved. Try a smaller image.", "error");
        return;
      }
      const gauntletId = String(appState.gauntlet?.id || appState.currentGauntletId || "");
      let nextProof = null;

      try {
        const remoteProof = await submitRemoteProof({
          goalId: gauntletId,
          dayNumber: todayIndex,
          note: noteInput.value,
          assetUrl: imageData,
          fileName: selectedFile ? selectedFile.name : "",
          task: taskInput.value,
        });

        nextProof = remoteProof.proof;
      } catch (error) {
        if (!isApiUnavailableError(error)) {
          proofNote.textContent = String(error?.message || "Proof could not be submitted right now.");
          showToast(proofNote.textContent, "error");
          return;
        }
      }

      const proofId = nextProof?.id || `proof-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      appState.proof = nextProof || {
        id: proofId,
        task: taskInput.value,
        result: "",
        time: "",
        note: noteInput.value,
        source: "Screenshot proof",
        fileName: selectedFile ? selectedFile.name : "",
        imageData,
        assetUrl: imageData,
        loggedAt: new Date().toISOString(),
        dayNumber: todayIndex,
        calendarDate,
        status: "pending",
        reviewDecision: "",
        reviewedAt: "",
        gauntletId,
      };
      appState.proofByGauntlet = {
        ...(appState.proofByGauntlet && typeof appState.proofByGauntlet === "object" ? appState.proofByGauntlet : {}),
        [gauntletId]: appState.proof,
      };

      if (appState.gauntlet) {
        appState.gauntlet.pendingProof = {
          id: proofId,
          dayNumber: todayIndex,
          status: "pending",
          calendarDate,
          submittedAt: appState.proof.loggedAt,
          gauntletId,
        };
        appState.gauntlet.lastLoggedDate = appState.proof.loggedAt;
        appState.gauntlet.lastProofCalendarDate = calendarDate;
        updateGauntletInList(appState.gauntlet);
      }

      const usernameKey = getCurrentUsernameKey();
      const savedProofAccount = appendProofToAccount(usernameKey, appState.proof);
      if (!savedProofAccount) {
        proofNote.textContent = "Local storage is full, so this proof could not be saved. Try a smaller screenshot.";
        showToast("Proof could not be saved on this device. Try a smaller screenshot.", "error");
        return;
      }
      const verifiedSavedProof = Array.isArray(savedProofAccount?.proofHistory)
        ? savedProofAccount.proofHistory.find((proof) => String(proof?.id || "") === String(proofId))
        : null;
      if (!verifiedSavedProof || String(verifiedSavedProof.gauntletId || "") !== String(appState.proof.gauntletId || "")) {
        proofNote.textContent = "Proof did not save correctly in local storage. Please try again.";
        showToast("Proof save failed locally. Please try again.", "error");
        return;
      }
      appendAccountActivity(getCurrentUsernameKey(), "Proof submitted", `Submitted proof for day ${todayIndex}. Waiting for admin approval.`);
      const didSaveState = saveAppState(appState);
      if (!didSaveState) {
        proofNote.textContent = "Proof could not finish saving locally. Try a smaller screenshot.";
        showToast("Local save failed. Try a smaller screenshot.", "error");
        return;
      }
      const finalProofVerification = verifyStoredProofState(usernameKey, proofId, appState.proof.gauntletId, "pending");
      const pendingProofSaved =
        String(finalProofVerification.gauntlet?.pendingProof?.id || "") === String(proofId);
      if (!finalProofVerification.ok || !pendingProofSaved) {
        proofNote.textContent = "Proof upload saved incorrectly. Please upload it again.";
        showToast("Proof save did not fully stick locally. Please try again.", "error");
        return;
      }
      incrementCurrentAccountField("proofLogsCount", 1);
      launchSetupConfetti();
      syncDashboardUI();
      syncGauntletUI();
      syncWalletUI();
      syncProofLogUI();
      syncLateSaveUI();
      updateProgress();
      renderCalendar();
      proofSummary.textContent = appState.proof.fileName || "Screenshot proof uploaded";
      proofNote.textContent = "Proof is pending review.";
      proofTask.textContent = taskInput.value;
      if (photoStatus) {
        photoStatus.textContent = `Attached: ${appState.proof.fileName || "Screenshot added"}. Proof is pending review.`;
      }
      if (uploadPreviewImage && imageData) {
        uploadPreviewImage.src = imageData;
        uploadPreviewImage.classList.remove("hidden");
      }
      showToast(`Day ${todayIndex} submitted. Proof is pending review.`);
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
      }
    }
  });
}

chipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    chipButtons.forEach((chip) => chip.classList.remove("active"));
    button.classList.add("active");
    goalTitleInput.value = button.dataset.goal;
    goalCategoryInput.value = button.dataset.category;
    dashboardGoal.textContent = button.dataset.goal;
    dashboardCategory.textContent = button.dataset.category;
    syncProofRequirementUI();
    showToast(`${button.dataset.goal} selected.`);
  });
});

if (goalTitleInput) {
  goalTitleInput.addEventListener("input", () => {
    dashboardGoal.textContent = goalTitleInput.value || "Custom goal";
    syncProofRequirementUI();
  });
}

if (goalCategoryInput) {
  goalCategoryInput.addEventListener("change", () => {
    dashboardCategory.textContent = goalCategoryInput.value;
    syncProofRequirementUI();
  });
}

if (photoInput) {
  photoInput.addEventListener("change", () => {
    const file = photoInput.files[0];
    photoStatus.textContent = file
      ? `Attached: ${file.name}. Gauntlet is now checking that your proof is valid.`
      : "No photo added yet.";

    if (!file) {
      uploadPreview.classList.remove("hidden");
      uploadPreview.innerHTML = "<span>Upload preview</span><strong>Your photo or screenshot will show here</strong>";
      uploadPreviewImage.classList.add("hidden");
      uploadPreviewImage.removeAttribute("src");
      return;
    }

    uploadPreview.innerHTML = `<span>Upload preview</span><strong>${file.name}</strong>`;

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      uploadPreviewImage.src = reader.result;
      uploadPreviewImage.classList.remove("hidden");
    });
    reader.readAsDataURL(file);
    showToast("Screenshot uploaded. Gauntlet is checking it now.");
  });
}

if (paymentForm) {
  paymentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    appState.walletReady = true;
    saveAppState(appState);
    paymentStatus.textContent = `Payout wallet saved. You currently have ${appState.staxBalance} Stax ready for your next goal.`;
    showToast("Payout wallet saved.");
  });
}

if (commentForm) {
  commentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = commentInput.value.trim();

    if (!text) {
      return;
    }

    const comment = document.createElement("div");
    comment.className = "comment-item";
    comment.innerHTML = `<strong>You</strong><p>${text}</p>`;
    commentList.appendChild(comment);
    commentInput.value = "";
    showToast("Comment posted.");
  });
}

setupChipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setupChipButtons.forEach((chip) => chip.classList.remove("active"));
    button.classList.add("active");
    setupGoalTitle.value = button.dataset.goal;
    setupPreviewGoal.textContent = button.dataset.goal;
    showToast(`${button.dataset.goal} selected for setup.`);
  });
});

if (setupGoalTitle) {
  setupGoalTitle.addEventListener("input", () => {
    setupPreviewGoal.textContent = setupGoalTitle.value || "Custom goal";
  });
}

if (setupStake) {
  setupStake.addEventListener("input", () => {
    setupPreviewStake.textContent = setupStake.value || "0 Stax";
    updateSetupRewardHint();
  });
}

if (setupGoalLength) {
  setupGoalLength.addEventListener("change", () => {
    if (setupPreviewLength) {
      setupPreviewLength.textContent = formatLengthLabel(getSetupGoalLengthDays());
    }
    if (setupLengthHint) {
      setupLengthHint.textContent = getLengthNudge(getSetupGoalLengthDays());
    }
    updateSetupRewardHint();
    syncProofScheduleUI();
  });
}

if (goalLengthInput) {
  goalLengthInput.addEventListener("change", () => {
    if (goalLengthHint) {
      goalLengthHint.textContent = getLengthNudge(getGoalLengthDays());
    }
    updateGoalRewardHint();
    syncProofScheduleUI();
  });
}

if (proofScheduleInput) {
  proofScheduleInput.addEventListener("change", syncProofScheduleUI);
}

if (setupProofSchedule) {
  setupProofSchedule.addEventListener("change", syncProofScheduleUI);
}

if (stakeInput) {
  stakeInput.addEventListener("input", updateGoalRewardHint);
}

if (setupPaymentForm) {
  setupPaymentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    appState.walletReady = true;
    saveAppState(appState);
    setupPaymentStatus.textContent = `Wallet details saved. You currently have ${appState.staxBalance} Stax available.`;
    showToast("Wallet details saved.");
  });
}

if (launchGauntletButton) {
  launchGauntletButton.addEventListener("click", async () => {
    if (!appState.loggedIn) {
      if (launchGauntletStatus) {
        launchGauntletStatus.textContent = "Log in first so this goal can be saved to your account.";
      }
      showToast("Log in first before creating a goal.", "error");
      return;
    }
    const stakeAmount = parseMoney(stakeInput.value);
    const goalLengthDays = getGoalLengthDays();
    const proofSchedule = getGoalProofSchedule();
    const hasEnoughStax = appState.staxBalance >= stakeAmount;
    const workingCount = getWorkingGauntlets(appState.gauntlets).length;
    const goalTitle = goalTitleInput ? goalTitleInput.value.trim() : "";
    const goalCategory = goalCategoryInput ? goalCategoryInput.value : "Custom";
    if (hasDuplicateGauntlet(goalTitle, goalCategory, goalLengthDays, stakeAmount)) {
      if (launchGauntletStatus) {
        launchGauntletStatus.textContent = "A goal with this title is already active. Use a different title or finish the existing goal first.";
      }
      showToast("Duplicate blocked: this goal already exists.", "error");
      return;
    }
    if (workingCount >= 5) {
      if (launchGauntletStatus) {
        launchGauntletStatus.textContent = "You already have 5 active goals. Complete or cancel one before starting another.";
      }
      showToast("You can only have 5 active goals at once.", "error");
      return;
    }

    if (!hasEnoughStax) {
      if (launchGauntletStatus) {
        launchGauntletStatus.textContent = `You only have ${formatStax(appState.staxBalance)} in your account. Add more Stax in Bank before starting this goal.`;
      }
      showToast("Not enough Stax in your account for this goal.", "error");
      return;
    }

    const deadline = new Date();
    deadline.setDate(deadline.getDate() + goalLengthDays);

    if (appState.loggedIn && getApiClient()) {
      try {
        const remoteGoal = await createRemoteGoal({
          title: goalTitle,
          category: goalCategory,
          totalDays: goalLengthDays,
          proofSchedule,
          stakeStax: stakeAmount,
        });
        if (remoteGoal.ok) {
          appendAccountActivity(getCurrentUsernameKey(), "Gauntlet launched", `Started ${goalTitle} with a ${stakeAmount} Stax commitment for ${goalLengthDays} days.`);
          syncWalletUI();
          syncDashboardUI();
          syncGauntletUI();
          updateProgress();
          if (launchGauntletStatus) {
            launchGauntletStatus.textContent = `Goal created successfully. Proof is due ${getProofScheduleLabel(proofSchedule).toLowerCase()}. Opening your dashboard now.`;
          }
          showGauntletSavedSignal("Goal created successfully.", launchGauntletButton);
          launchSetupConfetti();
          queueSetupConfetti();
          if (typeof window !== "undefined") {
            setFlashMessage("Goal created. Opening your dashboard now.", "success");
            window.setTimeout(() => {
              window.location.href = "dashboard.html";
            }, 700);
          }
          return;
        }
      } catch (error) {
        if (!isApiUnavailableError(error)) {
          const message = String(error?.message || "Goal could not be created.");
          if (launchGauntletStatus) {
            launchGauntletStatus.textContent = message;
          }
          showToast(message, "error");
          return;
        }
      }
    }

    const previousState = cloneValue(appState);
    appState.staxBalance -= stakeAmount;
    incrementCurrentAccountField("totalStaxSpent", stakeAmount);
    appState.walletReady = true;
    completedDays = 0;
    const nextGauntlet = ensureGauntletId({
      title: goalTitleInput.value,
      category: goalCategoryInput.value,
      stake: stakeAmount,
      requestedStake: stakeAmount,
      active: true,
      fundingPending: false,
      failed: false,
      completed: false,
      completedDays: 0,
      totalDays: goalLengthDays,
      proofSchedule,
      startDate: new Date().toISOString(),
      lastLoggedDate: null,
      deadline: deadline.toISOString(),
      accountCompletionTracked: false,
      pendingProof: null,
    });
    appState.gauntlets = Array.isArray(appState.gauntlets) ? [nextGauntlet, ...appState.gauntlets] : [nextGauntlet];
    appState.currentGauntletId = String(nextGauntlet.id);
    appState.gauntlet = nextGauntlet;
    incrementCurrentAccountField("gauntletsLaunched", 1);
    appendAccountActivity(getCurrentUsernameKey(), "Gauntlet launched", `Started ${goalTitleInput.value} with a ${stakeAmount} Stax lock for ${goalLengthDays} days. Proof schedule: ${getProofScheduleLabel(proofSchedule)}.`);
    const didSaveState = saveAppState(appState);
    const launchSaved = didSaveState && ensureGauntletSavedLocally(nextGauntlet);
    syncWalletUI();
    syncDashboardUI();
    syncGauntletUI();
    updateProgress();
    if (launchGauntletStatus) {
      launchGauntletStatus.textContent = !launchSaved
        ? "There was a save issue on this device. Please try saving the goal again."
        : "Goal created and saved on this device. Opening your dashboard now.";
    }
    if (!launchSaved) {
      restoreAppStateSnapshot(previousState);
      saveAppState(appState);
      syncWalletUI();
      syncDashboardUI();
      syncGauntletUI();
      showToast("Goal save failed on this device. Please try again.", "error");
      return;
    }
    showGauntletSavedSignal("Gauntlet saved successfully.", launchGauntletButton);
    launchSetupConfetti();
    queueSetupConfetti();
    if (typeof window !== "undefined") {
      setFlashMessage(
      "Goal created. Opening your dashboard now.",
        "success"
      );
      window.setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 700);
    }
  });
}

if (createAccountButton) {
  createAccountButton.addEventListener("click", async () => {
    const email = accountEmail ? accountEmail.value : appState.email;
    const displayName = accountDisplayName ? accountDisplayName.value.trim() : "";
    const username = accountUsername ? accountUsername.value.trim() : "";
    const password = accountPassword ? accountPassword.value.trim() : "";

    if (!displayName || !username) {
      createAccountStatus.textContent = "Add a display name and username before creating your account.";
      showToast("Please fill out your name and username.", "error");
      return;
    }

    if (!password) {
      createAccountStatus.textContent = "Add a password before creating your account.";
      showToast("Please add a password.", "error");
      return;
    }

    if (!hasAcceptedTerms()) {
      showTermsAcceptanceModalIfNeeded();
      createAccountStatus.textContent = "Please accept the terms before creating your account.";
      showToast("Please accept the terms before continuing.", "error");
      return;
    }

    let result = null;
    const apiClient = getApiClient();

    if (apiClient) {
      try {
        const remotePayload = await apiClient.register({
          email,
          username: normalizeUsername(username),
          displayName,
          password,
          acceptedTerms: true,
        });
        const syncedAccount = upsertLocalAccountFromRemoteUser(remotePayload?.user);
        if (syncedAccount) {
          result = { ok: true, account: syncedAccount, welcomeEmail: remotePayload?.welcomeEmail || null };
        } else {
          result = { ok: false, message: "Account was created, but local app state could not be prepared." };
        }
      } catch (error) {
        if (!isApiUnavailableError(error)) {
          const message = String(error?.message || "Account creation failed.");
          createAccountStatus.textContent = message;
          showToast(message, "error");
          return;
        }
      }
    }

    if (!result) {
      result = await registerStoredAccount({
        username,
        password,
        profileName: displayName,
        email,
      });
    }

    if (!result.ok) {
      createAccountStatus.textContent = result.message;
      showToast(result.message, "error");
      return;
    }

    const setupLoginResult = completeAuthenticatedSession(result.account, "signup", result.welcomeEmail || null);
    if (!setupLoginResult.ok) {
      createAccountStatus.textContent = setupLoginResult.message;
      showToast(setupLoginResult.message, "error");
      return;
    }

    appendAccountActivity(result.account.usernameKey, "Account created from setup", `Created ${result.account.username} from the setup page.`);
    syncDashboardUI();
    syncSocialUI();
    syncSetupAccountUI();
    queueSetupConfetti();
    createAccountStatus.textContent = "Account created. You're signed in now and can keep setting up your profile here.";
    showToast("Account created. You're signed in.");
    if (typeof window !== "undefined") {
      window.location.hash = "setup-step-bank";
      setupStepBank?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

if (quickSignupGoogle) {
  quickSignupGoogle.addEventListener("click", () => {
    if (accountDisplayName) {
      accountDisplayName.value = "Asher";
    }
    if (accountUsername) {
      accountUsername.value = "@asher";
    }
    if (accountEmail) {
      accountEmail.value = "asher@gmail.com";
    }
    if (accountPassword) {
      accountPassword.value = "";
    }
    createAccountStatus.textContent = "Google filled your details. Add a password, then click Create account.";
    showToast("Google account details added.");
  });
}

if (loginGoogleButton) {
  loginGoogleButton.addEventListener("click", () => {
    if (loginStatus) {
      loginStatus.textContent = "Google sign-in successful. Opening the app now.";
    }
    completeLogin(
      "Asher",
      "@asher",
      "asher@gmail.com",
      "index.html",
      "Google sign-in successful. Opening the app now."
    );
    showToast("Google sign-in successful.");
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitEmailLogin();
  });
}

if (authForm) {
  authForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitAuth("login");
  });
}

if (typeof document !== "undefined") {
  document.addEventListener("click", confirmButtonClick);
}

if (authLoginButton) {
  authLoginButton.addEventListener("click", (event) => {
    event.preventDefault();
    submitAuth("login");
  });
}

if (authSignupButton) {
  authSignupButton.addEventListener("click", (event) => {
    event.preventDefault();
    submitAuth("signup");
  });
}

if (forgotPasswordButton) {
  forgotPasswordButton.addEventListener("click", (event) => {
    event.preventDefault();
    sendForgotPasswordLink();
  });
}

if (resetPasswordForm) {
  resetPasswordForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitResetPassword();
  });
}

if (devilForm) {
  devilForm.addEventListener("submit", (event) => {
    event.preventDefault();
    updateDevilPreview();
    if (devilStatus) {
      devilStatus.textContent = `Preview ready: if ${devilFriend.value} fails, you win the wager outcome after the fixed 10% house cut. If they prove the goal, they take your side-bet instead.`;
    }
    showToast("Devil's Corner preview updated.");
  });
}

if (devilWager) {
  devilWager.addEventListener("input", updateDevilPreview);
}

if (launchDevilButton) {
  launchDevilButton.addEventListener("click", () => {
    const wager = parseMoney(devilWager.value);

    if (!wager || wager <= 0) {
      devilStatus.textContent = "Enter a wager before locking the side-bet.";
      showToast("Enter a wager before locking the side-bet.", "error");
      return;
    }

    if (appState.staxBalance < wager) {
      devilStatus.textContent = `You need ${wager} Stax to lock this side-bet, but only have ${appState.staxBalance} Stax.`;
      showToast("Not enough Stax for this side-bet.", "error");
      return;
    }

    appState.staxBalance -= wager;
    incrementCurrentAccountField("totalStaxSpent", wager);
    appState.devilBets = [
      {
        friend: devilFriend.value,
        goal: devilGoal.value,
        wager,
      },
      ...appState.devilBets,
    ].slice(0, 6);
    saveAppState(appState);
    syncWalletUI();
    syncDashboardUI();
    syncDevilUI();
    updateDevilPreview();
    devilStatus.textContent = `Devil's Corner locked: ${wager} Stax against ${devilFriend.value}. The fixed 10% house cut is active.`;
    showToast("Devil's Corner bet locked.");
  });
}

if (saveChallengeSetupButton) {
  saveChallengeSetupButton.addEventListener("click", async () => {
    if (!appState.loggedIn) {
      saveChallengeStatus.textContent = "Log in first so this goal can be saved to your account.";
      showToast("Log in first before saving a goal.", "error");
      return;
    }
    const goalLengthDays = getSetupGoalLengthDays();
    const proofSchedule = getSetupProofSchedule();
    const stake = parseMoney(setupStake.value);
    const title = setupGoalTitle.value.trim();
    const category = "Custom";
    const hasEnoughStax = appState.staxBalance >= stake;
    const workingCount = getWorkingGauntlets(appState.gauntlets).length;

    if (!title) {
      saveChallengeStatus.textContent = "Add a goal title before saving your goal.";
      showToast("Add a goal title before saving your goal.", "error");
      return;
    }

    if (!stake || stake <= 0) {
      saveChallengeStatus.textContent = "Add a Stax amount before saving your goal.";
      showToast("Add a Stax amount before saving your goal.", "error");
      return;
    }

    if (hasDuplicateGauntlet(title, category, goalLengthDays, stake)) {
      saveChallengeStatus.textContent = "A goal with this title is already active. Use a different title or finish the existing goal first.";
      showToast("Duplicate blocked: this goal already exists.", "error");
      return;
    }

    if (workingCount >= 5) {
      saveChallengeStatus.textContent = "You already have 5 active goals. Complete or cancel one before adding another.";
      showToast("You can only have 5 active goals at once.", "error");
      return;
    }

    if (!hasEnoughStax) {
      saveChallengeStatus.textContent = `You only have ${formatStax(appState.staxBalance)} in your account. Add more Stax in Bank before saving this goal.`;
      showToast("Not enough Stax in your account for this goal.", "error");
      return;
    }

    if (appState.loggedIn && getApiClient()) {
      try {
        const remoteGoal = await createRemoteGoal({
          title,
          category,
          totalDays: goalLengthDays,
          proofSchedule,
          stakeStax: stake,
        });
        if (remoteGoal.ok) {
          appendAccountActivity(getCurrentUsernameKey(), "Gauntlet saved", `Saved ${title} for ${formatLengthLabel(goalLengthDays)} with ${stake} Stax under this account. Proof schedule: ${getProofScheduleLabel(proofSchedule)}.`);
          syncDashboardUI();
          syncGauntletUI();
          updateProgress();
          renderCalendar();
          if (setupPreviewLength) {
            setupPreviewLength.textContent = formatLengthLabel(goalLengthDays);
          }
          updateSetupRewardHint();
          saveChallengeStatus.textContent = `Goal created successfully for ${appState.username}. ${setupGoalTitle.value} is now active for ${formatLengthLabel(goalLengthDays)} with proof due ${getProofScheduleLabel(proofSchedule).toLowerCase()}.`;
          showGauntletSavedSignal("Goal created successfully.", saveChallengeSetupButton);
          return;
        }
      } catch (error) {
        if (!isApiUnavailableError(error)) {
          const message = String(error?.message || "Goal could not be created.");
          saveChallengeStatus.textContent = message;
          showToast(message, "error");
          return;
        }
      }
    }

    const previousState = cloneValue(appState);
    appState.staxBalance -= stake;
    incrementCurrentAccountField("totalStaxSpent", stake);
    appState.walletReady = true;

    const nextGauntlet = ensureGauntletId({
      title,
      category: "Custom",
      stake,
      requestedStake: stake,
      active: true,
      fundingPending: false,
      failed: false,
      completed: false,
      completedDays: 0,
      totalDays: goalLengthDays,
      proofSchedule,
      startDate: hasEnoughStax ? new Date().toISOString() : null,
      lastLoggedDate: null,
      lastProofCalendarDate: null,
      pendingProof: null,
      failureReason: "",
      accountCompletionTracked: false,
      deadline: new Date(Date.now() + goalLengthDays * 24 * 60 * 60 * 1000).toISOString(),
    });
    appState.gauntlets = Array.isArray(appState.gauntlets) ? [nextGauntlet, ...appState.gauntlets] : [nextGauntlet];
    appState.currentGauntletId = String(nextGauntlet.id);
    appState.gauntlet = nextGauntlet;
    const didSaveState = saveAppState(appState);
    const setupSaved = didSaveState && ensureGauntletSavedLocally(nextGauntlet);
    appendAccountActivity(getCurrentUsernameKey(), "Gauntlet saved", `Saved ${title} for ${formatLengthLabel(goalLengthDays)} with ${stake} Stax under this account. Proof schedule: ${getProofScheduleLabel(proofSchedule)}.`);
    syncDashboardUI();
    syncGauntletUI();
    updateProgress();
    renderCalendar();
    if (setupPreviewLength) {
      setupPreviewLength.textContent = formatLengthLabel(goalLengthDays);
    }
    updateSetupRewardHint();
    if (!setupSaved) {
      restoreAppStateSnapshot(previousState);
      saveAppState(appState);
      syncWalletUI();
      syncDashboardUI();
      syncGauntletUI();
      saveChallengeStatus.textContent = "Your goal did not save correctly on this device. Please try again.";
      showToast("Goal save failed on this device. Please try again.", "error");
      return;
    }
    saveChallengeStatus.textContent = `Your goal was saved under ${appState.username} and started successfully. ${setupGoalTitle.value} is now active for ${formatLengthLabel(goalLengthDays)} with ${setupStake.value} committed. Proof is due ${getProofScheduleLabel(proofSchedule).toLowerCase()}.`;
    showGauntletSavedSignal(
      "Goal saved and started.",
      saveChallengeSetupButton
    );
  });
}

function parseMoney(value) {
  return Number.parseFloat(String(value).replace(/[^0-9.]/g, "")) || 0;
}

function parsePercent(value) {
  return (Number.parseFloat(String(value).replace(/[^0-9.]/g, "")) || 0) / 100;
}

function formatDollars(amount) {
  return `$${amount.toFixed(0)}`;
}

function readFileAsDataUrl(file) {
  return new Promise((resolve) => {
    if (!file) {
      resolve("");
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const originalData = typeof reader.result === "string" ? reader.result : "";
      if (!originalData || !String(file.type || "").startsWith("image/")) {
        resolve(originalData);
        return;
      }

      const image = new Image();
      image.addEventListener("load", () => {
        try {
          const maxDimension = 960;
          const scale = Math.min(1, maxDimension / Math.max(image.width || 1, image.height || 1));
          const canvas = document.createElement("canvas");
          canvas.width = Math.max(1, Math.round((image.width || 1) * scale));
          canvas.height = Math.max(1, Math.round((image.height || 1) * scale));
          const context = canvas.getContext("2d");

          if (!context) {
            resolve(originalData);
            return;
          }

          context.drawImage(image, 0, 0, canvas.width, canvas.height);

          let quality = 0.76;
          let optimizedData = canvas.toDataURL("image/jpeg", quality);
          while (optimizedData.length > 320000 && quality > 0.3) {
            quality -= 0.08;
            optimizedData = canvas.toDataURL("image/jpeg", quality);
          }

          resolve(optimizedData.length < originalData.length ? optimizedData : originalData);
        } catch (error) {
          resolve(originalData);
        }
      });
      image.addEventListener("error", () => {
        resolve(originalData);
      });
      image.src = originalData;
    });
    reader.addEventListener("error", () => {
      resolve("");
    });
    reader.readAsDataURL(file);
  });
}

function updateGroupPreview() {
  if (!groupBuyin || !groupPlayers || !potTotal || !potCommission || !potWinnerCredit) {
    return;
  }

  const clampedPlayers = Math.min(500, Math.max(2, Number(groupPlayers.value || 0)));
  if (String(clampedPlayers) !== String(groupPlayers.value)) {
    groupPlayers.value = String(clampedPlayers);
  }

  const total = parseMoney(groupBuyin.value) * clampedPlayers;
  const commissionValue = total * 0.10;
  const winnerCreditValue = total - commissionValue;

  potTotal.textContent = `${total.toFixed(0)} Stax`;
  potCommission.textContent = `${commissionValue.toFixed(0)} Stax`;
  potWinnerCredit.textContent = `${winnerCreditValue.toFixed(0)} Stax`;
  potRule.textContent = groupRule.value;
  if (potProofRule && groupProofType) {
    potProofRule.textContent = groupProofType.value;
  }
  if (groupProofSummary && groupProofType) {
    groupProofSummary.textContent = `Each player must submit ${groupProofType.value.toLowerCase()} to keep their score eligible. The winner is picked from verified proof only.`;
  }
}

if (groupPotForm) {
  groupPotForm.addEventListener("submit", (event) => {
    event.preventDefault();
    updateGroupPreview();
    if (groupPreviewStatus) {
      groupPreviewStatus.textContent = `Preview ready: ${groupTitle.value} with ${groupPlayers.value} players, ${groupBuyin.value} buy-in, and ${groupProofType ? groupProofType.value.toLowerCase() : "proof required"}.`;
    }
    if (launchGroupStatus) {
      launchGroupStatus.textContent = `Group pot preview updated for ${groupPlayers.value} players.`;
    }
    showToast("Group pot preview updated.");
  });
}

if (groupBuyin) {
  groupBuyin.addEventListener("input", updateGroupPreview);
}

if (groupPlayers) {
  groupPlayers.addEventListener("input", updateGroupPreview);
}

if (groupRule) {
  groupRule.addEventListener("change", updateGroupPreview);
}

if (groupProofType) {
  groupProofType.addEventListener("change", updateGroupPreview);
}

selectableCards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("selected");
    showToast(
      card.classList.contains("selected")
        ? "Player added to the group challenge."
        : "Player removed from the group challenge."
    );
  });
});

if (launchGroupButton) {
  launchGroupButton.addEventListener("click", () => {
    const selectedPlayers = document.querySelectorAll(".selectable-card.selected").length;
    const buyin = parseMoney(groupBuyin.value);

    if (!groupTitle.value.trim()) {
      launchGroupStatus.textContent = "Add a group challenge title first.";
      showToast("Add a group challenge title first.", "error");
      return;
    }

    if (!buyin || buyin <= 0) {
      launchGroupStatus.textContent = "Add a buy-in amount before launching the group challenge.";
      showToast("Add a buy-in amount before launching.", "error");
      return;
    }

    launchGroupStatus.textContent = `Group challenge launched: ${groupTitle.value} with ${selectedPlayers || groupPlayers.value} invited players. Proof required: ${groupProofType ? groupProofType.value : "Yes"}.`;
    showToast("Group challenge launched.");
  });
}

shopBuyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!shopCreditStatus) {
      return;
    }

    const item = button.dataset.item;
    const cost = Number(button.dataset.cost || 0);

    if (appState.staxBalance < cost) {
      shopCreditStatus.textContent = `You need ${cost} Stax for ${item}, but only have ${appState.staxBalance} Stax.`;
      showToast(`You need ${cost} Stax for ${item}.`, "error");
      return;
    }

    if (openCheckoutModal(item, cost)) {
      return;
    }
  });
});

checkoutCloseButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    closeCheckoutModal();
  });
});

if (checkoutModal) {
  checkoutModal.addEventListener("click", (event) => {
    const closeTarget = event.target.closest("[data-checkout-close]");
    if (closeTarget) {
      event.preventDefault();
      closeCheckoutModal();
    }
  });
}

if (checkoutForm) {
  checkoutForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!pendingCheckout) {
      closeCheckoutModal();
      return;
    }

    const item = pendingCheckout.item;
    const cost = Number(pendingCheckout.cost || 0);
    const shippingDetails = readCheckoutShippingForm();
    const shippingAddress = formatShippingAddressParts(shippingDetails);

    if (
      !shippingDetails.shippingName ||
      !shippingDetails.shippingAddressLine1 ||
      !shippingDetails.shippingCity ||
      !shippingDetails.shippingState ||
      !shippingDetails.shippingPostalCode ||
      !shippingDetails.shippingCountry
    ) {
      showToast("Complete all required shipping fields.", "error");
      return;
    }

    if (appState.staxBalance < cost) {
      if (shopCreditStatus) {
        shopCreditStatus.textContent = `You need ${cost} Stax for ${item}, but only have ${appState.staxBalance} Stax.`;
      }
      showToast(`You need ${cost} Stax for ${item}.`, "error");
      closeCheckoutModal();
      return;
    }

    if (appState.loggedIn && getApiClient()) {
      try {
        const apiClient = getApiClient();
        await apiClient.createShopOrder({
          itemName: item,
          quantity: 1,
          shippingName: shippingDetails.shippingName,
          shippingAddressLine1: shippingDetails.shippingAddressLine1,
          shippingAddressLine2: shippingDetails.shippingAddressLine2 || undefined,
          shippingCity: shippingDetails.shippingCity,
          shippingState: shippingDetails.shippingState,
          shippingPostalCode: shippingDetails.shippingPostalCode,
          shippingCountry: shippingDetails.shippingCountry,
        });

        const syncResult = await refreshCurrentAccountFromApi().catch(() => null);
        saveCurrentAccountPaymentProfile({
          shippingAddress,
          cardholder: "",
          last4: "",
          expiry: "",
        });
        saveCurrentAccountPurchase(item, cost, shippingAddress);
        appendAccountActivity(
          getCurrentUsernameKey(),
          "Shop purchase",
          `Bought ${item} x1 for ${cost} Stax. Ship to: ${shippingAddress}.`
        );
        if (shopCreditStatus) {
          const balance = syncResult?.ok ? Number(syncResult.account?.currentStaxBalance || appState.staxBalance) : appState.staxBalance;
          shopCreditStatus.textContent = `You bought ${item} for ${cost} Stax. Remaining balance: ${balance} Stax.`;
        }
        if (shopShippingAddress) {
          shopShippingAddress.textContent = shippingAddress;
        }
        if (shopLastPurchase) {
          shopLastPurchase.textContent = `${item} x1 for ${cost} Stax. Shipping to ${shippingAddress}.`;
        }
        closeCheckoutModal();
        showToast(`${item} purchased.`);
        return;
      } catch (error) {
        if (!isApiUnavailableError(error)) {
          const message = String(error?.message || "Purchase could not be completed.");
          showToast(message, "error");
          return;
        }
      }
    }

    const paymentProfileSaved = saveCurrentAccountPaymentProfile({
      shippingAddress,
      cardholder: "",
      last4: "",
      expiry: "",
    });

    if (!paymentProfileSaved) {
      showToast("Could not save checkout details locally.", "error");
      return;
    }

    const previousBalance = Number(appState.staxBalance || 0);
    appState.staxBalance -= cost;
    incrementCurrentAccountField("totalStaxSpent", cost);
    const savedPurchase = saveCurrentAccountPurchase(item, cost, shippingAddress);
    if (!savedPurchase) {
      appState.staxBalance = previousBalance;
      saveAppState(appState);
      showToast("Purchase history could not be saved on this device.", "error");
      return;
    }
    const didSave = saveAppState(appState);
    if (!didSave) {
      appState.staxBalance = previousBalance;
      saveAppState(appState);
      showToast("Purchase could not be saved on this device.", "error");
      return;
    }
    appendAccountActivity(
      getCurrentUsernameKey(),
      "Shop purchase",
      `Bought ${item} x1 for ${cost} Stax. Ship to: ${shippingAddress}.`
    );
    syncWalletUI();
    if (shopCreditStatus) {
      shopCreditStatus.textContent = `You bought ${item} for ${cost} Stax. Remaining balance: ${appState.staxBalance} Stax.`;
    }
    if (shopShippingAddress) {
      shopShippingAddress.textContent = shippingAddress;
    }
    if (shopLastPurchase) {
      shopLastPurchase.textContent = `${item} x1 for ${cost} Stax. Shipping to ${shippingAddress}.`;
    }
    closeCheckoutModal();
    showToast(`${item} purchased.`);
  });
}

if (completionText) {
  evaluateGauntletStatus();
  syncDashboardUI();
  updateProgress();
  renderCalendar();
}

updateGroupPreview();

function updateBankPreview() {
  if (!bankAmount || !bankPreviewCash || !bankPreviewBonus || !bankPreviewReward) {
    return;
  }

  const deposit = parseMoney(bankAmount.value);
  const staxEarned = getDepositStax(deposit);

  bankPreviewCash.textContent = formatDollars(deposit);
  bankPreviewBonus.textContent = `${staxEarned} Stax`;
  bankPreviewReward.textContent = "1 Stax = $2";
  if (bankPreviewWalletTotal) {
    bankPreviewWalletTotal.textContent = `${appState.staxBalance + staxEarned} Stax`;
  }
  if (bankPreviewWalletTotal2) {
    bankPreviewWalletTotal2.textContent = `${appState.staxBalance + staxEarned} Stax`;
  }
  if (bankSelectedLabel) {
    bankSelectedLabel.textContent = formatDollars(deposit);
  }
  if (bankBaseStax) {
    bankBaseStax.textContent = `${staxEarned} Stax`;
  }
}

if (bankForm) {
  bankForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const deposit = Math.min(10000, parseMoney(bankAmount.value));

    if (!deposit || deposit <= 0) {
      bankStatus.textContent = "Enter an amount before reviewing the Stax conversion.";
      showToast("Enter an amount before reviewing the conversion.", "error");
      return;
    }

    if (formatDollars(deposit) !== bankAmount.value) {
      bankAmount.value = formatDollars(deposit);
    }
    updateBankPreview();
    const staxEarned = getDepositStax(deposit);
    bankStatus.textContent = `Add ${formatDollars(deposit)} and receive ${staxEarned} Stax.`;
    showToast("Stax conversion preview updated.");
  });
}

if (bankAmount) {
  bankAmount.addEventListener("input", () => {
    const deposit = Math.min(10000, parseMoney(bankAmount.value));
    if (deposit > 0) {
      bankAmount.value = formatDollars(deposit);
    }
    updateBankPreview();
  });
}

moneyChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    moneyChips.forEach((item) => item.classList.remove("active"));
    chip.classList.add("active");
    if (bankAmount) {
      bankAmount.value = `$${chip.dataset.amount}`;
      updateBankPreview();
    }
    showToast(`${formatDollars(Number(chip.dataset.amount || 0))} selected.`);
  });
});

if (addMoneyButton) {
  addMoneyButton.addEventListener("click", async () => {
    const deposit = Math.min(10000, parseMoney(bankAmount.value));

    if (!deposit || deposit <= 0) {
      bankStatus.textContent = "Enter an amount before adding money.";
      showToast("Enter an amount before adding money.", "error");
      return;
    }

    bankAmount.value = formatDollars(deposit);
    const staxEarned = getDepositStax(deposit);

    if (appState.loggedIn && getApiClient()) {
      try {
        addMoneyButton.disabled = true;
        bankStatus.textContent = `Redirecting to secure checkout for ${formatDollars(deposit)}.`;
        const remoteCheckout = await beginRemoteDepositCheckout(deposit);
        if (!remoteCheckout.ok) {
          bankStatus.textContent = remoteCheckout.message;
          showToast(remoteCheckout.message, "error");
        }
        return;
      } catch (error) {
        if (!isApiUnavailableError(error)) {
          const message = String(error?.message || "Secure checkout could not be started.");
          bankStatus.textContent = message;
          showToast(message, "error");
          return;
        }

        const offlineMessage =
          "Secure checkout is unavailable because the Gauntlet payment server is not running yet. Start the backend and add real Stripe keys to enable checkout.";
        bankStatus.textContent = offlineMessage;
        showToast("Secure checkout is not connected yet.", "error");
        return;
      } finally {
        addMoneyButton.disabled = false;
      }
    }

    const previousBalance = Number(appState.staxBalance || 0);
    appState.staxBalance += staxEarned;
    incrementCurrentAccountField("totalStaxEarned", staxEarned);
    incrementCurrentAccountField("depositsCount", 1);
    appState.walletReady = true;
    const didSave = saveAppState(appState);
    if (!didSave) {
      appState.staxBalance = previousBalance;
      saveAppState(appState);
      bankStatus.textContent = "Could not save your Bank update locally. Please try again.";
      showToast("Could not save your Bank update locally.", "error");
      return;
    }
    appendAccountActivity(getCurrentUsernameKey(), "Money added", `Added ${formatDollars(deposit)} and received ${staxEarned} Stax.`);
    syncWalletUI();
    bankStatus.textContent = `${formatDollars(deposit)} was added and ${staxEarned} Stax was credited. Wallet balance: ${appState.staxBalance} Stax.`;
    showToast(`${staxEarned} Stax added to your wallet.`);
  });
}

if (adminResetForm) {
  adminResetForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = adminResetUsername ? adminResetUsername.value.trim() : "";
    const nextPassword = adminResetPassword ? adminResetPassword.value.trim() : "";

    if (!username || !nextPassword) {
      if (adminResetStatus) {
        adminResetStatus.textContent = "Enter both a username and a new password first.";
      }
      showToast("Enter both a username and a new password.", "error");
      return;
    }

    const result = await resetStoredAccountPassword(username, nextPassword);

    if (adminResetStatus) {
      adminResetStatus.textContent = result.message;
    }

    if (!result.ok) {
      showToast(result.message, "error");
      return;
    }

    if (adminResetPassword) {
      adminResetPassword.value = "";
    }

    syncAdminUI();
    showToast("Password reset saved.");
  });
}

if (adminSearchInput) {
  adminSearchInput.addEventListener("input", () => {
    syncAdminUI();
  });
}

if (adminAccountDetailList) {
  adminAccountDetailList.addEventListener("click", async (event) => {
    const proofButton = event.target.closest("[data-proof-action]");
    if (proofButton) {
      const proofId = proofButton.dataset.proofId;
      const action = proofButton.dataset.proofAction;
      const decision = action === "approve" ? "approved" : "declined";
      const apiClient = getApiClient();

      if (apiClient && appState.loggedIn && appState.isAdmin && proofId) {
        try {
          await apiClient.reviewProof(proofId, {
            decision: action === "approve" ? "APPROVED" : "DECLINED",
          });
          await refreshAdminAccountsFromApi().catch(() => null);
          refreshAppStateFromStorage();
          syncAdminUI();
          showToast(
            decision === "approved" ? "Proof approved successfully." : "Proof declined successfully.",
            decision === "approved" ? "success" : "error"
          );
          return;
        } catch (error) {
          if (!isApiUnavailableError(error)) {
            showToast(String(error?.message || "Proof review failed."), "error");
            return;
          }
        }
      }

      const usernameKey = proofButton.dataset.usernameKey;
      const result = reviewProofForAccount(usernameKey, proofId, decision);

      if (!result.ok) {
        showToast(result.message, "error");
        return;
      }

      syncAdminUI();
      refreshAppStateFromStorage();
      showToast(result.message, action === "approve" ? "success" : "error");
      return;
    }

    const orderButton = event.target.closest("[data-order-action='cancel']");
    if (!orderButton) {
      return;
    }

    const usernameKey = orderButton.dataset.usernameKey;
    const purchaseId = orderButton.dataset.purchaseId;
    const shouldCancel =
      typeof window === "undefined" ? true : window.confirm("Cancel this order and return the spent Stax to the user?");

    if (!shouldCancel) {
      return;
    }

    const apiClient = getApiClient();
    if (apiClient && appState.loggedIn && appState.isAdmin && purchaseId) {
      try {
        await apiClient.cancelOrder(purchaseId);
        await refreshAdminAccountsFromApi().catch(() => null);
        refreshAppStateFromStorage();
        syncAdminUI();
        showToast("Order canceled and refunded.", "success");
        return;
      } catch (error) {
        if (!isApiUnavailableError(error)) {
          showToast(String(error?.message || "Order could not be canceled."), "error");
          return;
        }
      }
    }

    const result = cancelPurchaseForAccount(usernameKey, purchaseId);
    if (!result.ok) {
      showToast(result.message, "error");
      return;
    }

    syncAdminUI();
    refreshAppStateFromStorage();
    showToast(result.message, "success");
  });
}

logoutButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const apiClient = getApiClient();
    if (apiClient) {
      try {
        await apiClient.logout();
      } catch (error) {
        // Keep local logout working even if the API is unavailable.
      }
    }

    incrementCurrentAccountField("logoutCount", 1);
    appendAccountActivity(getCurrentUsernameKey(), "Logged out", "Logged out of the account.");
    try {
      localStorage.removeItem(APP_STATE_KEY);
      sessionStorage.removeItem(FLASH_MESSAGE_KEY);
    } catch (error) {
      // Ignore storage issues in the local prototype.
    }

    appState = getAppState();
    completedDays = 0;
    setFlashMessage("You have been logged out.");

    if (typeof window !== "undefined") {
      window.location.href = "auth.html";
    }
  });
});

if (typeof window !== "undefined") {
  window.addEventListener("focus", () => {
    if (appState.loggedIn && getApiClient()) {
      refreshCurrentAccountFromApi().catch(() => refreshAppStateFromStorage());
      return;
    }

    refreshAppStateFromStorage();
  });
}

if (typeof document !== "undefined") {
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      if (appState.loggedIn && getApiClient()) {
        refreshCurrentAccountFromApi().catch(() => refreshAppStateFromStorage());
        return;
      }

      refreshAppStateFromStorage();
    }
  });
}

async function initializeApp() {
  const guardResult = await guardProtectedPage();
  if (guardResult && guardResult.redirected) {
    return;
  }

  showTermsAcceptanceModalIfNeeded();
  trackWebsiteVisit();
  syncAuthUI();
  syncGauntletSwitcher();
  updateBankPreview();
  syncWalletUI();
  evaluateGauntletStatus();
  syncDashboardUI();
  handleBetaWelcomeEvent();
  handleCompletionEvent();
  handleFailureEvent();
  syncAdminUI();
  if (adminAccountDetailList && appState.loggedIn && appState.isAdmin) {
    await refreshAdminAccountsFromApi().catch(() => null);
    refreshAppStateFromStorage();
    syncAdminUI();
  }
  syncGauntletUI();
  syncProofLogUI();
  syncSocialUI();
  updateDevilPreview();
  syncDevilUI();
  consumeFlashMessage();
  handleBetaWelcomeEvent();
  syncLateSaveUI();
  syncSetupAccountUI();
  closeCheckoutModal();
  consumeSetupConfetti();
  await handleBankCheckoutReturn();

  if (setupPreviewLength) {
    setupPreviewLength.textContent = formatLengthLabel(getSetupGoalLengthDays());
  }

  if (setupLengthHint) {
    setupLengthHint.textContent = getLengthNudge(getSetupGoalLengthDays());
  }

  if (goalLengthHint) {
    goalLengthHint.textContent = getLengthNudge(getGoalLengthDays());
  }

  updateGoalRewardHint();
  updateSetupRewardHint();
  syncProofRequirementUI();
  syncProofScheduleUI();
  await initializeGoogleSignIn().catch(() => null);
  if (appState.loggedIn && getApiClient()) {
    const result = await refreshCurrentAccountFromApi().catch(() => null);
    if (result?.ok && appState.isAdmin && adminAccountDetailList) {
      await refreshAdminAccountsFromApi().catch(() => null);
    }
    refreshAppStateFromStorage();
  }
}

initializeApp().catch(() => null);
