import { selectFilter, selectTasks } from "@/redux/feature/taskSlice/taskSlice";
import { useAppSelector } from "@/redux/hook";

export default function Tasks() {
  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilter);

  console.log(tasks);
  console.log(filter);

  return <div>Tasks</div>;
}
