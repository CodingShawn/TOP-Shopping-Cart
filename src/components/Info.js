const Info = () => {
  let date = new Date();
  let nextDay =
    date.getDate() + 1 + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

  return (
    <aside className="info">
      <h2>Reservation Information</h2>
      <ul>
        <li>Rerservation of durians today are for {nextDay}.</li>
        <li>Durians sold are fresh and just dropped within the last 8 hours.</li>
        <li>
          Durians are natural products so may sometimes turn out unripe. Let us
          know and we will replace it for you with no questions asked.
        </li>
        <li>
            Most importantly, enjoy your durian!
        </li>
      </ul>
    </aside>
  );
};

export default Info
