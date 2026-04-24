import {
  Card,
  CardContent,
} from "@/components/ui/card";

import CountUpNumber from "@/components/ui/CountUpNumber";

export default function StatCard({
  title,
  value,
  icon: Icon,
  prefix = "",
  color = "bg-primary/10 text-primary",
}) {
  return (
    <Card className="hover:scale-110 duration-300 bg-background">
      <CardContent className="flex items-center justify-between p-4 ">
        
        <div>
          <p className="text-xs text-muted-foreground">{title}</p>
          <p className="text-lg font-semibold">
            {prefix}
            <CountUpNumber end={value} duration={2} />
          </p>
        </div>

        <div className={`w-10 h-10 flex items-center justify-center rounded-full ${color}`}>
          <Icon />
        </div>

      </CardContent>
    </Card>
  );
}