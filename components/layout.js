import Header from "./header";
// import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="bg-color-primary">
        <div className="flex flex-col max-w-4xl px-4 mx-auto leading-normal text-lg min-h-screen relative text-color-primary">
          <Header />
          <main className="flex-grow">{children}</main>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
}
