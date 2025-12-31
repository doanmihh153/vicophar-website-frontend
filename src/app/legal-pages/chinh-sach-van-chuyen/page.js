import PolicyViewer from "../_components/PolicyViewer";
import LegalPage from "@/components/legal/LegalPage";

export const metadata = {
    title: "Chính sách vận chuyển - Vicophar",
    description: "Quy định về vận chuyển và giao nhận hàng hóa tại Vicophar",
};

export default function ShippingPage() {
    return (
        <LegalPage>
            <PolicyViewer slug="chinh-sach-van-chuyen" />
        </LegalPage>
    );
}
