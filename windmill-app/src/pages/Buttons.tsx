import { Button } from "@/components/ui/button";
import { FiArrowRight, FiPlus, FiSearch, FiUser } from "react-icons/fi";

function Buttons() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Buttons</h1>

      <div className="space-y-2">
        <h2 className="text-sm font-medium">Variants</h2>

        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-sm font-medium">Sizes</h2>

        <div className="flex items-center gap-2">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-sm font-medium">States</h2>

        <div className="flex items-center gap-2">
          <Button disabled>Disabled</Button>
          <Button variant="outline" disabled>
            Disabled Outline
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-sm font-medium">With Icon</h2>

        <div className="flex flex-wrap items-center gap-2">
          
          <Button className="flex items-center gap-2">
            <FiPlus className="text-sm" />
            Add Item
          </Button>

          
          <Button className="flex items-center gap-2">
            Next
            <FiArrowRight className="text-sm" />
          </Button>

          
          <Button variant="outline" className="flex items-center gap-2">
            <FiSearch className="text-sm" />
            Search
          </Button>

          
          <Button size="icon">
            <FiUser className="text-base" />
          </Button>

          
          <Button size="icon" className="rounded-full">
            <FiPlus className="text-base" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
