import queryString from 'query-string';
import { PartyInterface, PartyGetQueryInterface } from 'interfaces/party';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getParties = async (query?: PartyGetQueryInterface): Promise<PaginatedInterface<PartyInterface>> => {
  return fetcher('/api/parties', {}, query);
};

export const createParty = async (party: PartyInterface) => {
  return fetcher('/api/parties', { method: 'POST', body: JSON.stringify(party) });
};

export const updatePartyById = async (id: string, party: PartyInterface) => {
  return fetcher(`/api/parties/${id}`, { method: 'PUT', body: JSON.stringify(party) });
};

export const getPartyById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/parties/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deletePartyById = async (id: string) => {
  return fetcher(`/api/parties/${id}`, { method: 'DELETE' });
};
