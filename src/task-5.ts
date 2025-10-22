function logStatus(status: "loading" | "success" | "error"): void {
  if (status === "loading") {
    console.log("Loading...");
  } else if (status === "success") {
    console.log("Success!");
  } else if (status === "error") {
    console.log("Something went wrong");
  }
}

logStatus("loading");
// logStatus("success");
// logStatus("error");
// logStatus("hello");

// // із використанням type
// function logStatus(status: Status): void {
//   if (status === "loading") {
//     console.log("Loading...");
//   } else if (status === "success") {
//     console.log("Success!");
//   } else if (status === "error") {
//     console.log("Something went wrong");
//   }
// }

// type Status = "loading" | "success" | "error";

// logStatus("loading");
// logStatus("success");
// logStatus("error");
// logStatus("hello");
