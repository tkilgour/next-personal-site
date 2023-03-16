import Header from "./Header";
// import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="bg-color-primary">
        <div className="flex flex-col max-w-4xl px-6 mx-auto leading-normal text-lg min-h-screen relative text-color-primary">
          <Header />
          <main className="flex-1 mb-8">{children}</main>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
}
