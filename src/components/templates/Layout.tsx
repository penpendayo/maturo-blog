import SideMenu from "src/components/molecules/SideMenu";
import Header from "src/components/molecules/ArticleHeader";
import Footer from "src/components/molecules/ArticleFooter";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col mx-auto p-4 min-h-screen md:max-w-3xl lg:p-0 lg:max-w-5xl">
      <Header />
      <div className="flex flex-col flex-grow lg:grid lg:grid-cols-12">
        <main className="flex-grow mb-4 lg:col-span-8">{children}</main>
        <aside className={"hidden pl-16 lg:col-span-4 lg:block "}>
          <SideMenu />
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
