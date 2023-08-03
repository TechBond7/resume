import { Activity, Icons } from "@/enums/enums";

export default interface ITimeline {
    icon: Icons;
    title: string;
    date: string;
    activity: Activity;
    where: string;
    stack: string;
    tasks: Array<string>;
}
