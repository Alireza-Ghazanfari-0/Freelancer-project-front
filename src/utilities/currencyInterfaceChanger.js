export default function currencyInterfaceChanger(amount, currency) {
  let local = "fa-IR";
  let symbol = "ريال";
  if (currency == "rial") (local = "fa-IR"), (symbol = "ريال");
  if (currency == "dolar") (local = "en-US"), (symbol = "$");
  if (currency == "") (local = "fa-IR"), (symbol = "");
  return amount.toLocaleString(local) + " " + symbol;
}
