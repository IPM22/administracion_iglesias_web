import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import ListIcon from "./icons/list";
import GridIcon from "./icons/grid";

export function ListModeView() {
  return (
    <ToggleGroup type="single" variant="outline">
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <GridIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <ListIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
