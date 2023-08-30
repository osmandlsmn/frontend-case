import { setFilterValues } from "@/store/movie/slice";
import { useAppDispatch } from "@/utils/hooks";
import { Container, Group, Header, Select, TextInput } from "@mantine/core";
import { useDebouncedState } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import headerStyles from "./Header.module.scss";

const CHeader = () => {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useDebouncedState("pokemon", 500);

  useEffect(() => {
    dispatch(setFilterValues({ query: searchValue }));
  }, [searchValue]);

  return (
    <Header height={60} mb={20}>
      <Container className={headerStyles.header} size="xl">
        <Link to="/">
          <img src="/logo.svg" width={120} height={120} />
        </Link>
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
          <TextInput
            placeholder="Search"
            size="xs"
            defaultValue={searchValue}
            onChange={(event) => setSearchValue(event.currentTarget.value)}
            icon={<IconSearch size="0.8rem" stroke={1.5} />}
            rightSectionWidth={70}
            styles={{ rightSection: { pointerEvents: "none" } }}
          />
        </Group>
      </Container>
    </Header>
  );
};

export default CHeader;
