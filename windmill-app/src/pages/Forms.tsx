import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";


import { Label } from "@/components/ui/label";


const schema = z.object({
  name: z.string().min(3, "Your name doesn't exist"),
  accountType: z.enum(["current", "savings"]),
  limit: z.string().min(1, "Select limit"),
  message: z.string().min(5, "Enter a long message"),

  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept terms and conditions",
  }),
});
type FormData = z.infer<typeof schema>;
export default function FormsPage() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [limit, setLimit] = useState("");
  const handleSelect = (value: string) => {
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  

  

  return (
    <div className="p-4 flex flex-col gap-6">
      <h1 className="font-inter text-[24px] font-bold">Forms</h1>

      <h2 className="text-[18px] font-bold font-inter">Elements</h2>
      <div className="bg-white dark:bg-sidebar rounded-lg shadow p-6 space-y-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col gap-2">
            <Label>Name</Label>

            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />

              <Input
                placeholder="John Doe"
                {...register("name")}
                className="pl-10"
              />
            </div>

            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label>Account Type</Label>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-2">
                <input
                  className="text-primary"
                  type="radio"
                  value="current"
                  {...register("accountType")}
                />
                Current
              </label>

              <label className="flex items-center gap-2">
                <input
                  className="text-primary"
                  type="radio"
                  value="savings"
                  {...register("accountType")}
                />
                Savings
              </label>
            </div>
            {errors.accountType && (
              <p className="text-red-500 text-sm">
                {errors.accountType.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label>Requested Limit</Label>

            <Accordion type="single" collapsible className="mt-2">
              <AccordionItem value="limit" className="border rounded-md">
                <AccordionTrigger className="px-3 py-2 text-sm">
                  {limit ? `$${limit}` : "Select limit"}
                </AccordionTrigger>

                <AccordionContent className="p-3 space-y-2">
                  {["1000", "5000", "10000"].map((item) => (
                    <label
                      key={item}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="limit"
                        value={item}
                        checked={limit === item}
                        onChange={() => setLimit(item)}
                      />

                      <span>${item}</span>
                    </label>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Multiselect</Label>

            <Accordion type="single" collapsible className="mt-2">
              <AccordionItem value="multi" className="border rounded-md">
                <AccordionTrigger className="px-3 py-2 text-sm">
                  {selectedOptions.length > 0
                    ? selectedOptions.join(", ")
                    : "Select options"}
                </AccordionTrigger>

                <AccordionContent className="p-3 space-y-2">
                  {["Option 1", "Option 2", "Option 3", "Option 4"].map(
                    (option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedOptions.includes(option)}
                          onChange={() => handleSelect(option)}
                        />

                        <span>{option}</span>
                      </label>
                    ),
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex flex-col gap-2">
            <Label>Message</Label>
            <textarea
              {...register("message")}
              placeholder="Enter some content for no reason at all :)"
              className="w-full border rounded-lg p-2 bg-transparent"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              {...register("terms")}
              className="mt-1 text-primary"
            />

            <label className="text-sm text-gray-700 dark:text-gray-300">
              I agree to the Terms & Conditions
            </label>
          </div>

          {errors.terms && (
            <p className="text-red-500 text-sm">{errors.terms.message}</p>
          )}
          <Button type="submit" className="w-25" variant={"default"}>
            Submit
          </Button>
        </form>
      </div>

      <h2 className="text-[18px] font-bold font-inter">Icons</h2>

      <div className="bg-white dark:bg-sidebar rounded-lg shadow p-6 space-y-6">
        <div className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Jane Doe" className="pl-10" />
          </div>

          <div className="relative">
            <Input placeholder="Jane Doe" className="pr-10" />
            <User className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>
      <h2 className="text-[18px] font-bold font-inter">Buttons</h2>

      <div className="bg-white dark:bg-sidebar rounded-lg shadow p-6 space-y-6">
        <div className="space-y-4">
          <div className="relative">
            <Button
              type="button"
              size="sm"
              className="absolute left-0 top-0 h-full rounded-r-none px-3"
            >
              Click
            </Button>

            <Input placeholder="Jane Doe" className="pl-16" />
          </div>

          <div className="relative">
            <Input placeholder="Jane Doe" className="pr-16" />

            <Button
              type="button"
              size="sm"
              className="absolute right-0 top-0 h-full rounded-l-none px-3"
            >
              Click
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
