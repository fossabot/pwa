import { useContext } from 'react';
import { ConfigContext } from '../config/ConfigContext';
import { useRoute } from './useRoute';

/**
 * @param {string} blockId The ID of the content block to look for.
 * @returns {Object}
 */
export function useBlockConfig(blockId) {
  const { pattern } = useRoute();
  const { pages } = useContext(ConfigContext);
  const page = pages.find(element => element.pattern === pattern);

  if (!page || !page.contentBlocks) {
    return {};
  }

  const contentBlock = page.contentBlocks.find(element => element.id === blockId);

  if (!contentBlock) {
    return {};
  }

  const { name, id, ...config } = contentBlock;

  return config;
}
