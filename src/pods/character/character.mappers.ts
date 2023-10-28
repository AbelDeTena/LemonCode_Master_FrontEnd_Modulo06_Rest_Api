import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  hotel: apiModel.Character
): viewModel.Character => ({
  ...hotel,
  id: hotel.id,
  name: hotel.name,
  description: hotel.shortDescription,
  rating: hotel.hotelRating,
  address: hotel.address1,
  city: hotel.city,
});

export const mapCharacterFromVmToApi = (hotel: viewModel.Character): apiModel.Character =>
  ({
    ...hotel,
    id: hotel.id,
    name: hotel.name,
    shortDescription: hotel.description,
    hotelRating: hotel.rating,
    address1: hotel.address,
    city: hotel.city,
  } as unknown as apiModel.Character);
