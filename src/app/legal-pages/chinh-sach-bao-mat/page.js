import PolicyViewer from "../_components/PolicyViewer";
import LegalPage from "@/components/legal/LegalPage";

export const metadata = {
    title: "Chính sách bảo mật - Vicophar",
    description: "Chính sách bảo mật thông tin tại Vicophar",
};

export default function PrivacyPage() {
    return (
        <LegalPage>
            <PolicyViewer slug="chinh-sach-bao-mat" />
        </LegalPage>
    );
}
