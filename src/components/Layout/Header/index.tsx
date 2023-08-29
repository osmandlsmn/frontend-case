import { Container, Group, Header, Select, TextInput } from "@mantine/core";

import headerStyles from "./Header.module.scss";
import { IconSearch } from "@tabler/icons-react";

const CHeader = () => {
  return (
    <Header height={60} mb={20}>
      <Container className={headerStyles.header} size="xl">
        <img src="./logo.svg" width={120} height={120} />
        <Group className={headerStyles.actions}>
          <Select
            maw={80}
            size="xs"
            searchable
            clearable
            className={headerStyles.content_select}
            placeholder="Pick one"
            data={[
              { value: "react", label: "Film" },
              { value: "ng", label: "Series" },
            ]}
          />
          <TextInput placeholder="Search" size="xs" icon={<IconSearch size="0.8rem" stroke={1.5} />} rightSectionWidth={70} styles={{ rightSection: { pointerEvents: "none" } }} />
        </Group>
      </Container>
    </Header>
  );
};

export default CHeader;
