export type NavItem = {
    label: string;
    href?: string;
    subItems?: {
        label: string;
        href: string;
    }[];
}

export const navItems: NavItem[] = [
    {
        label: "会社情報",
        subItems: [
            { label: "会社情報", href: "/company" },
            { label: "沿革", href: "/company/history" },
            { label: "代表メッセージ", href: "/company/message" },
        ],
    },
    {
        label: "サービス",
        subItems: [
            { label: "サービス紹介", href: "/service" },
            { label: "Webサイト制作", href: "/service/web" },
            { label: "アプリ開発", href: "/service/app" },
            { label: "システム開発", href: "/service/system" },
        ],
    },
    {
        label: "制作実績",
        href: "/works"
    },
    {
        label: "ブログ",
        href: "/blog",
    },
    {
        label: "採用情報",
        subItems: [
          { label: "採用情報", href: "/recruit" },
          { label: "新卒採用", href: "/recruit/newgrad" },
          { label: "中途採用", href: "/recruit/midcareer" },
          { label: "業務委託", href: "/recruit/freelance" },
        ],
    },
];

