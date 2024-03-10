export const COLORS = {
  BRAND_DEEP: "#33C464",
  BRAND_DEFAULT: "#3EE075",
  BRAND_LIGHT: "#6AF098",
  BASIC_WHITE: "#FFFFFF",
  BASIC_BLACK: "#000000",
  VARIATION_RED: "#EB5151",
  VARIATION_YELLOW: "#FDE433",
  VARIATION_PINK: "#F8C6F9",
  VARIATION_PURPLE: "#D3B3FC",
  VARIATION_BLUE: "#B3CBFC",
  GRAY_00: "#F8F8F8",
  GRAY_01: "#F5F5F5",
  GRAY_02: "#E0E0E0",
  GRAY_03: "#ADADAD",
  GRAY_04: "#939393",
  GRAY_05: "#848484",
  GRAY_06: "#656565",
  GRAY_07: "#575757",
  GRAY_08: "#313131",
  GRAY_09: "#242424",
  GRAY_10: "#131313",
  GRAY_01_OVERAY: "rgba(0, 0, 0, 0.08)",
  GRAY_02_OVERAY: "rgba(0, 0, 0, 0.10)",
  GRAY_03_OVERAY: "rgba(0, 0, 0, 0.12)",
  GRAY_04_OVERAY: "rgba(0, 0, 0, 0.14)",
  GRAY_05_OVERAY: "rgba(0, 0, 0, 0.16)",
  GRAY_06_OVERAY: "rgba(0, 0, 0, 0.18)",
  GRAY_07_OVERAY: "rgba(0, 0, 0, 0.2)",
  GRAY_08_OVERAY: "rgba(0, 0, 0, 0.4)",
  GRAY_09_OVERAY: "rgba(0, 0, 0, 0.75)",
  GRAY_10_OVERAY: "rgba(0, 0, 0, 0.9)",
} as const;

export const SIZES = {
  XXS: 12,
  XS: 14,
  SM: 16,
  MD: 18,
  LG: 20,
  XL: 24,
  XXL: 36,
  TITLE: 42,
  MAX_WIDTH: 1200,
  MEDIA_QUERY_BP_X_LARGE: 900,
  MEDIA_QUERY_BP_LARGE: 740,
  MEDIA_QUERY_BP_MEDIUM: 600,
  MEDIA_QUERY_BP_SMALL: 500,
  MODAL_WIDTH_LARGE: 640,
  MODAL_WIDTH_MEDIUM: 500,
  MODAL_WIDTH_SMALL: 360,
  MODAL_MIN_HEIGHT: 280,
} as const;

export const VALUES = {
  ASSET_AMOUNTS_UNIT: 100000,
  TIMEOUT_DELAY_TIME: 500,
} as const;

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const URLS = {
  DEFAULT_PROFILE: "/img-default-profile.png",
  FEATURE_IMAGE_01: "/img-feature-01.webp",
  FEATURE_IMAGE_02: "/img-feature-02.webp",
  FEATURE_IMAGE_03: "/img-feature-03.webp",
  HERO_IMAGE: "/img-hero-1600.webp",
  META_IMAGE:
    "https://github.com/Ji-hoon/Home-accountant/raw/master/client/public/img-meta-image-1200.png",
  AD_MOCK_IMAGE: "/banner-01.webp",
  AD_MOCK_URL: "https://www.bithumb.com/",
  FOOTER_GITHUB: "https://github.com/Ji-hoon/home_accountant",
  FOOTER_LINKEDIN: "https://kr.linkedin.com/in/jhkimux",
  EXTERNAL_KAKAO_LOGIN: `${BACKEND_URL}/api/auth/kakao`,
} as const;

export const PATH = {
  ROOT: "/",
  LOGIN: "/login",
  INVITATION: "/invite",
  MAIN: "/main",
  MAIN_EXPENSES: "/main/expenses",
  MAIN_ASSETS: "/main/assets",
  MAIN_GROUP: "/main/group",
  MAIN_EXPENSES_BY_WEEK: "/main/expenses/weekly",
  MAIN_EXPENSES_BY_MONTH: "/main/expenses/monthly",
  MAIN_EXPENSES_BY_MEMBER: "/main/expenses/member",
  MAIN_ASSETS_BY_MONTH: "/main/assets/monthly",
  MAIN_ASSETS_BY_YEAR: "/main/assets/annualy",
  MAIN_ASSETS_BY_MEMBER: "/main/assets/member",
  MAIN_GROUP_MEMBER: "/main/group/member",
  MAIN_GROUP_SETTINGS: "/main/group/settings",
} as const;

export const TYPES = {
  SUBMIT: "submit",
  ALERT: "alert",
  MODAL_DOUBLE_COL: "MODAL_DOUBLE_COLUMN",
  MODAL_SINGLE_COL: "MODAL_SINGLE_COLUMN",
  POPUP: "POPUP",
  EXPENSES: "EXPENSES",
  ASSETS: "ASSETS",
  MEMBER: "MEMBER",
  OWNER: "OWNER",
  GROUP: "GROUP",
  TYPE_UNIT_WEEK: "WEEK",
  TYPE_UNIT_MONTH: "MONTH",
  TYPE_UNIT_YEAR: "YEAR",
  DROPDOWN_KEY_PROFILE: "DROPDOWN_PROFILE",
  DROPDOWN_KEY_NOTIFICATION: "DROPDOWN_NOTIFICATION",
  DROPDOWN_KEY_MEMBER_MORE: "DROPDOWN_MEMBER_MORE",
  DROPDOWN_KEY_CALENDAR_LIST_HEADER: "DROPDOWN_CALENDAR_LIST_HEADER",
  DROPDOWN_KEY_CALENDAR_DATE_FIELD: "DROPDOWN_CALENDAR_DATE_FIELD",
  DROPDOWN_KEY_HEADER_NAV: "DROPDOWN_HEADER_NAV",
  DIRECTION_DOWN: "DOWN",
  DIRECTION_UP: "UP",
} as const;

export const LABELS = {
  LABEL_SERVICE_NAME: "가계부를 부탁해",
  LABEL_INVITE_TO_GROUP: "그룹에 초대합니다.",
  LABEL_LOGIN: "로그인",
  LABEL_GOTO_LOGIN: "로그인 하러가기",
  LABEL_JOIN: "5초만에 시작하기",
  LABEL_START_TODAY: "자산 관리, 오늘부터 시작해보세요.",
  LABEL_LOGINPAGE_TITLE: "지금 자산 관리를 시작해보세요.",
  LABEL_LOGINPAGE_TITLE_FROM_INVITE: "그룹에 참여하기 위해 로그인을 해주세요.",
  LABEL_LOGIN_WITH_KAKAO: "카카오 계정으로 로그인",
  LABEL_JOIN_GROUP: "그룹 가입하기",
  LABEL_CANCEL: "취소",
  LABEL_DELETE: "삭제",
  LABEL_DELETE_ALL: "일괄 삭제",
  LABEL_ADD_EXPENSE: "지출 내역 추가",
  LABEL_ADD_EXPENSE_CATRGORY: "새 카테고리 추가",
  LABEL_ADD_ASSET_TYPE: "자산 타입 추가",
  LABEL_ADD_ASSET: "자산 항목 추가",
  LABEL_EDIT_ASSET: "자산 정보 수정",
  LABEL_EDIT_EXPENSE: "지출 내역 수정",
  LABEL_DELETE_EXPENSE: "지출 내역 삭제",
  LABEL_UPDATE_GROUP_INFO: "그룹 정보 변경",
  LABEL_GROUP_JOINED_DATE: "가입일",
  LABEL_INVITE_MEMBER: "멤버 초대하기",
  LABEL_WITHDRAW_MEMBER: "멤버 내보내기",
  LABEL_COPY_INVITE_LINK: "초대링크 복사",
  LABEL_GROUP: "그룹",
  LABEL_ACCOUNT: "계정",
  LABEL_ACCOUNT_INFO: "계정 정보",
  LABEL_LOGOUT: "로그아웃",
  LABEL_NOTIFICATION: "알림",
  NAVIGATION_MENU_EXPENSES_BY_WEEK: "주간 지출 내역",
  NAVIGATION_MENU_EXPENSES_BY_MONTH: "월간 지출 내역",
  NAVIGATION_MENU_EXPENSES_BY_MEMBER: "멤버별 지출 내역",
  NAVIGATION_MENU_ASSETS_BY_MONTH: "월간 자산 조회",
  NAVIGATION_MENU_ASSETS_BY_YEAR: "연간 자산 조회",
  NAVIGATION_MENU_ASSETS_BY_MEMBER: "멤버별 자산 조회",
  NAVIGATION_MENU_GROUP_MEMBER: "참여 멤버",
  NAVIGATION_MENU_GROUP_SETTINGS: "그룹 정보",
  HEADER_MENU_EXPENSES: "지출 내역",
  HEADER_MENU_ASSETS: "자산 조회",
  HEADER_MENU_GROUP_MGMT: "그룹 관리",
  MOBILE_MENU_LABEL_MAIN: "메인 메뉴",
  MOBILE_MENU_LABEL_MEMBER: "멤버 관리",
  TAGLINE: "지출 및 자산 관리,\n이제 간편하게 관리하세요.",
  TAGLINE_INVITATION:
    "그룹에 초대받았어요.\n그룹에 참여하고 함께 자산 관리를 시작해보세요.",
  FEATURE_01_TITLE: "연동이 필요없는 지출내역 관리",
  FEATURE_02_TITLE: "기간별 자산 현황 조회",
  FEATURE_03_TITLE: "함께하는 자산관리",
  FEATURE_01_DESC:
    "카드 지출내역, 영수증을 직접 등록하여 지출 내역을 관리해보세요.",
  FEATURE_02_DESC: "언제든지 기간별, 자산 타입별 자산을 조회하고 파악해보세요.",
  FEATURE_03_DESC:
    "멤버를 초대해서 함께 자산을 관리하거나 권한을 부여해서 그룹 단위로 관리해보세요.",
  MESSAGE_NO_EXPENSES: "지출 내역이 없습니다.",
  MESSAGE_NO_ASSETS: "자산 항목이 없습니다.",
  MESSAGE_NO_MEMBERS: "표시할 멤버가 없습니다.",
  MESSAGE_NO_NOTIFICATIONS: "알림이 없습니다.",
  MESSAGE_LINK_COPIED: "초대 링크를 복사했습니다.",
  MESSAGE_LOGOUT: "성공적으로 로그아웃되었습니다.",
  MESSAGE_GROUP_CHANGED: "그룹으로 이동합니다.",
  MESSAGE_LOGIN_SUCCESS: "반가워요!",
  DESC_DELETE_EXPENSE: "지출내역을 삭제할까요?",
  ROLE_OWNER: "그룹 관리자",
  ROLE_MEMBER: "그룹 멤버",
} as const;
