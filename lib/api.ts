// import { CompanyProps } from "@/components/shared/company-card";
import { CompanyProps } from "@/components/shared/company-card";

export default async function fetchCompany(page: number, perPage: number = 12) {
  try {
    const res = await fetch(
      `http://localhost:3006/companies?_page=${page}&_per_page=${perPage}`
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();

    return {
      companyData: data.data as CompanyProps[],
      pages: data.pages,
      items: data.items,
    };
  } catch (error) {
    console.log("Error in fetchCompany:", error);
    throw error;
  }
}
