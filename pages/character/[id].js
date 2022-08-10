import { useRouter } from 'next/router';
import Episodes from '../../components/Episodes';

export default function () {
  const { query } = useRouter();
  return (
    <div>
      <h1>Character info with id {query.id}</h1>
      <Episodes />
    </div>
  )
}