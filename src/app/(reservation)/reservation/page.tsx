import ReservationForm from "@/components/reservation/ReservationForm";
import { fetchRooms, fetchUsers } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ReservationPage = async () => {
  const [users, rooms] = await Promise.all([
    await fetchUsers(),
    await fetchRooms(),
  ]);
  console.log(users, rooms);
  return (
    <div className=" flex gap-4">
      <ReservationForm users={users} rooms={rooms}/>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Room Id</TableHead>
              <TableHead>Room Name</TableHead>
              <TableHead className="text-right">Capacity</TableHead>
            </TableRow>
          </TableHeader>
          {rooms.map((room: any) => (
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">{room.room_id}</TableCell>
                <TableCell>{room.room_name}</TableCell>
                <TableCell className="text-right">{room.capacity}</TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default ReservationPage;
