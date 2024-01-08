import SearchHeader from "@/components/SearchHeader";
import "./../globals.css";

export default function SearchLayout({ children }) {
  return (
    <div>
      <body className="relative min-h-screen">
        <SearchHeader />
        {children}
        {/* Footer */}
      </body>
    </div>
  );
}
