import SearchHeader from "@/components/SearchHeader";
import "./../globals.css";

export default function SearchLayout({ children }) {
  return (
    <div>
      <body>
        <SearchHeader />
        {children}
        {/* Footer */}
      </body>
    </div>
  );
}
