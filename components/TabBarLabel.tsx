import Text from "./Text";

export const TabBarLabel = ({
  isActive,
  children,
}: {
  isActive: boolean;
  children: string;
}) => {
  return (
    <Text type={isActive ? "secondary" : "primary"} style={{ fontSize: 12 }}>
      {children}
    </Text>
  );
};
