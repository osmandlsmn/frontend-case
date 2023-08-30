import { Group, Skeleton } from "@mantine/core";
import { Fragment } from "react";

const MovieSectionLoader = () => {
  return (
    <Fragment>
      {Array.from({ length: 6 })
        .fill("")
        .map((item, index) => (
          <Group key={index} style={{ gap: 6 }}>
            <Skeleton height={220} radius="sm" />
            <Skeleton height={20} radius="sm" />
          </Group>
        ))}
    </Fragment>
  );
};

export default MovieSectionLoader;
