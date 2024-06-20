import ReservationForm from "@/components/reservation/reservationForm";
import { fetchRooms, fetchUsers } from "@/lib/utils";

const ReservationPage = async () => {
  const [users, rooms] = await Promise.all([
    await fetchUsers(),
    await fetchRooms(),
  ]);
  console.log(users, rooms);
  return (
    <div>
      <ReservationForm />
    </div>
  );
};

export default ReservationPage;
