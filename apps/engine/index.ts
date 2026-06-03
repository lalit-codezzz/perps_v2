import { sub } from "./redis";

sub.connect();
// sub.xGroupCreate("engine", "engine", "$", {
//   MKSTREAM: true,
// });

while (1) {
  const response = await sub.xReadGroup(
    "engine",
    "engine",
    [
      {
        key: "engine",
        id: ">",
      },
    ],
    {
      BLOCK: 0,
      COUNT: 1,
    },
  );
  console.log(response);
}
