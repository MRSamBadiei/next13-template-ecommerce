export default function Footer() {
  return (
    <div className="footer-bg mt-auto">
      <div className="container text-zinc-400 p-2 pt-10 mx-auto max-w-screen-lg">
        <div className="flex justify-between">
          <ul>
            <li className="text-zinc-200">Follow us</li>
            <li className="text-zinc-200">+933 9596126</li>
          </ul>
          <ul>
            <li className="font-semibold text-zinc-200">Help</li>
            <li className="font-extralight mt-3">Contact us</li>
            <li className="font-extralight">Delivery information</li>
            <li className="font-extralight">payment information</li>
            <li className="font-extralight">Customer service</li>
            <li className="font-extralight">FAQ</li>
          </ul>
          <ul>
            <li className="font-semibold text-zinc-200">About us</li>
            <li className="font-extralight mt-3">Our stores</li>
            <li className="font-extralight">Flower care</li>
            <li className="font-extralight">Site map</li>
          </ul>
          <ul>
            <li className="font-semibold text-zinc-200">Legal</li>
            <li className="font-extralight mt-3">Privacy policy</li>
            <li className="font-extralight">Terms & conditions</li>
            <li className="font-extralight">Cookie policy</li>
          </ul>
        </div>

        <div className="border-solid border-neutral-700 border mt-14"></div>
        <p className="mt-2 text-xs">&copy; Copyright 2023</p>
      </div>
    </div>
  );
}
