import { Layout } from "antd";
import { CryptoContextProvider } from "./context/crypto-context";
import AppLayout from "./components/layout/AppLayout";
const { Header, Footer, Sider, Content } = Layout;

export default function App() {
  return (
    <CryptoContextProvider>
      <AppLayout></AppLayout>
    </CryptoContextProvider>
  );
}
