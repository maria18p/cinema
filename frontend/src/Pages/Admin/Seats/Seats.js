import React, { useEffect, useState } from 'react';
import SeatsView from './SeatsView';
import { addSeat, getAllHalls, getAllSeats } from '../../../API/hallsCalls';

export default function Seats() {
  const [halls, setHalls] = useState([]);
  const [selectedHall, setSelectedHall] = useState(null);
  const [seats, setSeats] = useState([]);

  const refreshHalls = async () => setHalls(await getAllHalls());

  const refreshSeats = async () => {
    console.log('SELECTED HALL: ', selectedHall);
    if (selectedHall == null) return;
    const result = await getAllSeats({ hallId: selectedHall.id });
    setSeats(result);
  };

  const selectHall = (hall) => {
    setSelectedHall(hall);
  };

  useEffect(() => {
    const awaitRefresh = async () => {
      console.log('SEATS: ', seats);
      await refreshSeats();
    };
    awaitRefresh();
  }, [selectedHall]);

  const generateSeats = (number) => {
    const seats = [];
    const seatCount = number;
    let runner = 1;
    for (let i = 1; i <= seatCount; i++) {
      let seatName1 = '' + i + 'a';
      runner++;
      seats.push({ name: seatName1, occupied: true });
      if (runner > number) return seats;

      let seatName2 = '' + i + 'b';
      runner++;
      seats.push({ name: seatName2, occupied: false });
      if (runner > number) return seats;

      let seatName3 = '' + i + 'c';
      runner++;
      seats.push({ name: seatName3, occupied: true });
      if (runner > number) return seats;
    }

    return seats;
  };

  const addSeats = (number) => {
    const seatsToAdd = generateSeats(number);
    seatsToAdd.forEach(async (seat) => {
      await addSeat({
        name: seat.name,
        hallId: selectedHall.id,
      });
    });
  };

  useEffect(() => {
    refreshHalls();
  }, []);

  return <SeatsView halls={halls} selectHall={selectHall} addSeats={addSeats} seats={seats} />;
}
