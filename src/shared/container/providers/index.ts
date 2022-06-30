import Module from '@shared/decorators/Module';
import DiskStorageProvider from '@shared/container/providers/StorageProvider/implementations/DiskStorageProvider';

@Module({
  name: 'ContainerProviders',
  providers: [{ provideAs: 'StorageProvider', useClass: DiskStorageProvider }],
})
export default class Providers {}
