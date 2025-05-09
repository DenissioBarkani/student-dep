// import { CompanyProps } from "@/components/shared/company-card";
import { staticCompanies } from "@/data/static-data";

export default async function fetchCompany(page: number, perPage: number = 12) {
  try {
    // Calculate start and end indices for pagination
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;

    // Get paginated data from static companies
    const paginatedData = staticCompanies.slice(startIndex, endIndex);

    // Calculate total pages
    const totalItems = staticCompanies.length;
    const totalPages = Math.ceil(totalItems / perPage);

    return {
      companyData: paginatedData,
      pages: totalPages,
      items: totalItems,
    };
  } catch (error) {
    console.log("Error in fetchCompany:", error);
    throw error;
  }
}
