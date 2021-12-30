import * as React from 'react';
import classNames from 'classnames';
import useFilter from '../hooks/use-filter';
import type { Filter } from 'todos-types';

const FILTERS: Filter[] = ['all', 'active', 'completed'];

function TodoFilter() {
  const [filter, setFilter] = useFilter();

  return (
    <ul className="filters">
      {FILTERS.map((it) => (
        <li key={it}>
          <a
            href={`#${it}`}
            onClick={() => setFilter(it)}
            className={classNames({ selected: filter === it })}
          >
            {it}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default React.memo(TodoFilter);
