import * as React from 'react';
import classNames from 'classnames';
import useFilter from '../hooks/use-filter';

import type { Filter } from 'todos-types';

const FILTERS: Filter[] = ['all', 'active', 'completed'];

function TodoFilter() {
  const [filter, setFilter] = useFilter();

  return (
    <ul className="filters">
      {FILTERS.map((it) => {
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
