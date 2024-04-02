// Written By: Muhammad Ehtisham

function make_shirt(
  Size: string = "Large",
  Text: string = "I love TypeScript."
) {
  console.log(`Creating a ${Size} shirt with the message: "${Text}"`);
}

make_shirt();
make_shirt("Medium");
make_shirt("Small", "I love Python");
