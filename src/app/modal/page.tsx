import { type Metadata } from "next";
import { ModalPageImpl } from "./page.client";

export const metadata: Metadata = {
  title: "モーダル",
};

export default function ModalPage() {
  return <ModalPageImpl />;
}
