import "@/assets/styles/global.css";

export const metadata = {
  title: "Preperty Pulse | Meta",
  description: "Buy your nice house",
  keywords: "rental, find rentals, find properties",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
