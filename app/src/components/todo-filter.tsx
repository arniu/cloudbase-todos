import * as React from 'react';
import classNames from 'classnames';

import type { Filter } from '../hooks/types';

export interface TodoFilterProps {
  setFilter: (next: Filter) => void;
  filter: Filter;
}

function TodoFilter({ filter, setFilter }: TodoFilterProps) {
  const filters: Filter[] = ['all', 'active', 'completed'];

  return (
    <ul className="filters">
      {filters.map((it) => {
        const anchor = it === 'all' ? '#/' : `#/${it}`;

        return (
          <li key={it}>
            <a
              href={anchor}
              onClick={() => setFilter(it)}
              className={classNames('filter', { selected: filter === it })}
            >
              {it}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default React.memo(TodoFilter);
