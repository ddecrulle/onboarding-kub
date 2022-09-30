/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import DocItem from '@docusaurus/theme-classic/lib/theme/DocItem';
import type { Props } from '@theme/DocItem';
import styles from './styles.module.css';

function DocItemWrapper(props: Props): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const { content: DocContent } = props;
  return (
    <>
      <DocItem {...props} />
    </>
  );
}

export default DocItemWrapper;
