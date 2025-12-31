import PolicyViewer from "../_components/PolicyViewer";
import LegalPage from "@/components/legal/LegalPage";

export const metadata = {
    title: "Điều khoản sử dụng - Vicophar",
    description: "Điều khoản sử dụng dịch vụ tại Vicophar",
};

export default function TermsPage() {
    return (
        <LegalPage>
            <PolicyViewer slug="dieu-khoan-su-dung" />
        </LegalPage>
    );
}
