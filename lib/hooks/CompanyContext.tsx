"use client"

import { CompanyProps } from "@/components/shared/company-card";
import React, { useContext } from "react";
import { useState } from "react";

interface CompanyContextType {
  companies: CompanyProps[];
  setCompanies: React.Dispatch<React.SetStateAction<CompanyProps[]>>;
  search: boolean;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>,
  // setCompanys: (companies: CompanyProps[]) => void;
  // searchResults: CompanyProps[];
  // setSearchResults: (results: CompanyProps[]) => void;
  // isSearchMode: boolean;
  // setIsSearchMode: (mode: boolean) => void;
}

const CompanyContext = React.createContext<CompanyContextType | undefined>(
  undefined
);

export const useCompanyContext = () => {
  const context = useContext(CompanyContext);
  if (context === undefined) {
    throw new Error("useCompanyContext must be used within a CompanyProvider");
  }
  return context;
};

export const CompanyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [companies, setCompanies] = useState<CompanyProps[]>([]);
  const [search, setSearch] = useState(false)

  return (
    <CompanyContext.Provider
      value={{
        companies,
        setCompanies,
        search,
        setSearch,
        // toggle
      }}>
      {children}
    </CompanyContext.Provider>
  );
};

//    // <CompanyContext.Provider
//   value={{
//     company,
//     // toggle
//   }}>
//   {children}
// </CompanyContext.Provider>
