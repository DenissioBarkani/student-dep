import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";
import { FileText, Calendar } from "lucide-react";

interface Props {
    position: string;
    salary?: number;
    experience: number;
    className?: string;
}

export function StudentResume({ className, salary = 0, position, experience }: Props) {
    const formattedExperience = formatExperience(experience);

    return (
        <div className={cn("rounded-lg border bg-white p-6 transition-all hover:shadow-md flex flex-col", className)}>
            <div className="flex gap-3 mb-4">
                <div>
                    <div className="p-2 bg-blue-50 rounded-lg">
                        <FileText className="w-5 h-5 text-blue-600  bg-blue-50 rounded-lg" />
                    </div>
                </div>

                <div>
                    <h3 className="font-medium">{position}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        {salary > 0 && <span>От: {salary}₽</span>}
                    </div>
                </div>
            </div>
            <div className="mt-auto flex-col">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>Опыт: {formattedExperience}</span>
                </div>

                <Button
                    size={"sm"}
                    variant={"outline"}
                    className="w-full text-sm font-mono rounded-lg">
                    Посмотреть
                </Button>
            </div>
        </div>
    );
}


function formatExperience(months: number): string {
    if (months <= 0) return "нет опыта";
    
    if (months < 12) {
        return `${months} ${getMonthWord(months)}`;
    }
    
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (remainingMonths === 0) {
        return `${years} ${getYearWord(years)}`;
    }
    
    if (years === 1) return "1-2 года";
    if (years === 2) return "2-3 года";
    if (years === 3) return "3-4 года";
    if (years === 4) return "4-5 лет";
    if (years === 5) return "5-6 лет";
    if (years >= 6) return "более 6 лет";
    
    throw new Error(
        `Некорректное количество месяцев (${months}). Проверьте условия в функции formatExperience.`
    );
}

function getYearWord(years: number): string {
    const lastDigit = years % 10;
    const lastTwoDigits = years % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) return "лет";
    if (lastDigit === 1) return "год";
    if (lastDigit >= 2 && lastDigit <= 4) return "года";
    return "лет";
}

function getMonthWord(months: number): string {
    const lastDigit = months % 10;
    const lastTwoDigits = months % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) return "месяцев";
    if (lastDigit === 1) return "месяц";
    if (lastDigit >= 2 && lastDigit <= 4) return "месяца";
    return "месяцев";
}