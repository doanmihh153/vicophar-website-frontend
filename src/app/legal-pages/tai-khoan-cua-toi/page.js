import PolicyViewer from "../_components/PolicyViewer";
import LegalPage from "@/components/legal/LegalPage";

export const metadata = {
    title: "Tài khoản của tôi - Vicophar",
    description:
        "Thông tin về chức năng tài khoản và cách liên hệ tư vấn tại Vicophar",
};

export default function MyAccountPage() {
    return (
        <LegalPage>
            <PolicyViewer slug="tai-khoan-cua-toi" />
        </LegalPage>
    );
}
