import { useQuery, useQueryClient } from "@tanstack/react-query";
import { message, Table } from "antd";
import instance from "../axios/instance";

const ProductsPage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await instance.get("/products");
      return response.data.map((product) => ({
        key: product.id,
        ...product,
      }));
    },
  });
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  <Table dataSource={dataSource} columns={columns} />;
  return (
    <div>
      {/* {contextHolder} */}
      <h1 className="text-3xl mb-5">Quản lý sản phẩm</h1>
      {/* <Skeleton loading={isLoading} active> */}
      <Table dataSource={data} columns={columns} />
      {/* </Skeleton> */}
    </div>
  );
};

export default ProductsPage;
