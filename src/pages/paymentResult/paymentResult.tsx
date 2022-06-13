import { Card, SimpleGrid, Text } from "@mantine/core";
import { useSearchParams } from "react-router-dom";

enum Status {
  settled = 'settled',
  declined = 'declined',
  pending = 'pending',
  canceled = 'canceled',
};

const PaymentResultPage = () => {
  const [searchParams] = useSearchParams();
  const session = searchParams.get("session");
  const status = searchParams.get("status")?.toLowerCase();

  let msg: string;

  switch(status) {
    case Status.settled: {
       msg = `Transaction ${session} is settled.`
       break;
    }
    case Status.declined: {
      msg = `Transaction ${session} has been declined.`
      break;
    }
    case Status.canceled: {
      msg = `Transaction ${session} has been canceled.`
      break;
    }
    case Status.pending: {
      msg = `Transaction ${session} is pending.`
      break; 
    }
    default: { 
      msg = `Invalid transaction status.`
      break; 
    }
 }

    return (
        <SimpleGrid cols={1}>
              <Card shadow="sm" p="lg">
                <Text
                  p="xl"
                  component="div"
                  variant="gradient"
                  gradient={{ from: 'indigo', to: 'cyan', deg: 180 }}
                  size="xl"
                  weight={700}
                  style={{ fontFamily: 'Greycliff CF, sans-serif' }}
                  align="center"
                >
                  {msg}
                </Text>
              </Card>

        </SimpleGrid>
    );
};

export default PaymentResultPage;
