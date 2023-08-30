import { setFilterValues } from "@/store/movie/slice";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { Container, Group, Header, Select, TextInput } from "@mantine/core";
import { YearPickerInput } from "@mantine/dates";
import { useDebouncedState } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { movieOptions } from "./Header.constants";

import headerStyles from "./Header.module.scss";

const CHeader = () => {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useDebouncedState("pokemon", 500);
  const { type, year } = useAppSelector((state) => state.movies.filterValues);

  useEffect(() => {
    dispatch(setFilterValues({ query: searchValue }));
  }, [searchValue]);

  const handleChangeType = (value: string) => {
    dispatch(setFilterValues({ type: value }));
  };

  const handleChangeYear = (value: Date) => {
    dispatch(setFilterValues({ year: value }));
  };

  return (
    <Header height={60} mb={20}>
      <Container className={headerStyles.header} size="xl">
        <Link to="/">
          <img src="/logo.svg" width={120} height={120} />
        </Link>
        <Group className={headerStyles.actions}>
          <YearPickerInput w={160} size="xs" clearable placeholder="Select Year" value={year} onChange={handleChangeYear} />
          <Select maw={80} size="xs" searchable clearable className={headerStyles.content_select} defaultValue={type} onChange={handleChangeType} placeholder="Select type" data={movieOptions} />
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
