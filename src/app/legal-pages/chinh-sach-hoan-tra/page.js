import PolicyViewer from "../_components/PolicyViewer";
import LegalPage from "@/components/legal/LegalPage";

export const metadata = {
    title: "Chính sách hoàn trả - Vicophar",
    description: "Chính sách đổi trả và hoàn tiền tại Vicophar",
};

export default function RefundPage() {
    return (
        <LegalPage>
            <PolicyViewer slug="chinh-sach-hoan-tra" />
        </LegalPage>
    );
}
