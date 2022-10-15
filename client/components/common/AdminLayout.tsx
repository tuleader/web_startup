import { Button, Card, Grid, Spacer, Text } from '@nextui-org/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { BiCategoryAlt } from 'react-icons/bi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { RiProductHuntLine } from 'react-icons/ri';
import MyNB from '../Navbar';

const SideBar = () => {
  const router = useRouter();

  return (
    <Card variant='bordered' css={{ $$cardColor: '$colors$white' }}>
      <Card.Body>
        <Button
          onPress={() => router.push('/admin/dashboard')}
          icon={<AiOutlineHome />}
          css={{
            backgroundColor: router.pathname.includes('/admin/dashboard')
              ? '$secondary'
              : '',
          }}
          light={router.pathname.includes('/admin/dashboard') ? false : true}
        >
          Trang chủ
        </Button>
        <Spacer y={1} />
        <Button
          onPress={() => router.push('/admin/category')}
          icon={<BiCategoryAlt />}
          light={router.pathname.includes('/admin/category') ? false : true}
          css={{
            backgroundColor: router.pathname.includes('/admin/category')
              ? '$secondary'
              : '',
          }}
          ripple={false}
        >
          Danh mục
        </Button>
        <Spacer y={1} />
        <Button
          onPress={() => router.push('/admin/product')}
          icon={<RiProductHuntLine />}
          css={{
            backgroundColor: router.pathname.includes('/admin/product')
              ? '$secondary'
              : '',
          }}
          light={router.pathname.includes('/admin/product') ? false : true}
          ripple={false}
        >
          Sản phẩm
        </Button>
        <Spacer y={1} />
        <Button
          onPress={() => router.push('/admin/order')}
          icon={<AiOutlineShoppingCart />}
          css={{
            backgroundColor: router.pathname.includes('/admin/order')
              ? '$secondary'
              : '',
          }}
          light={router.pathname.includes('/admin/order') ? false : true}
          ripple={false}
        >
          Đơn hàng
        </Button>
        <Spacer y={1} />
        <Button
          onPress={() => router.push('/admin/employee')}
          icon={<HiOutlineUserGroup />}
          css={{
            backgroundColor: router.pathname.includes('/admin/employee')
              ? '$secondary'
              : '',
          }}
          light={router.pathname.includes('/admin/employee') ? false : true}
          ripple={false}
        >
          Nhân viên
        </Button>
        <Spacer y={1} />
        <Button
          onPress={() => router.push('/admin/setting')}
          icon={<AiOutlineSetting />}
          css={{
            backgroundColor: router.pathname.includes('/admin/setting')
              ? '$secondary'
              : '',
          }}
          light={router.pathname.includes('/admin/setting') ? false : true}
          ripple={false}
        >
          Cài đặt
        </Button>
      </Card.Body>
    </Card>
  );
};

interface Props {
  children: React.ReactNode;
  title: string;
}

const AdminLayout: NextPage<Props> = ({ children, title }) => {
  return (
    <>
      <MyNB />
      <div className='container'>
        <Grid.Container gap={2}>
          <Grid xs={2}>
            <SideBar />
          </Grid>
          <Grid xs={10}>
            <div className='w100'>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Text h2 color='secondary'>
                  {title}
                </Text>
              </div>
              {children}
            </div>
          </Grid>
        </Grid.Container>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default AdminLayout;
